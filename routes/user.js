var express = require('express');
var router = express.Router();
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const security =  require("../security/security");
const {privateKey} = security;

router.post('/create',async function (req,res,next){
    console.log(req.body)
    bcrypt.hash(req.body.password, 10, async function(err, hash) {
        try {
            let user = await prisma.user.create({
                data : {
                    password : hash,
                    email : req.body.email,
                }
            })
            const token = jwt.sign({user: user.id, password : req.body.password}, privateKey,{algorithm: 'RS256',expiresIn:"7d"});
            res.send({
                status : "OK",
                token : token
            });
        } catch (e) {
            res.send({
                status : "Internal error " +e.message,
                token: "none"
            })
        }
    });
})
router.post('/login',async function (req,res,next){
    let password = req.body.password;
    let token = req.headers.authorization;
    let login = req.body.email;
    try {
        try {
            const decoded = jwt.verify(token,privateKey);
            let user = await prisma.user.findUnique({
                where : {
                    id : decoded.user
                }
            })
            await bcrypt.compare(decoded.password, user.password, function(err, result) {
                if (result){
                    const token = jwt.sign({user: user.id, password : decoded.password}, privateKey,{algorithm: 'RS256',expiresIn:"7d"});
                    res.send({
                        status : "OK",
                        token : token
                    });
                }else {
                    res.send({status: "Auth Error"})
                }
            });
        } catch (e){
            console.log(e)
           if (login && password){
               let user = await prisma.user.findUnique({
                   where : {
                       email : login
                   }
               })
               await bcrypt.compare(password, user.password, function(err, result) {
                   if (result){
                       const token = jwt.sign({user: user.id, password : password}, privateKey,{algorithm: 'RS256',expiresIn:"7d"});
                       res.send({
                           status : "OK",
                           token : token
                       });
                   }else {
                       res.send({status: "Auth Error"})
                   }
               });
           } else {
               res.send({status: "Auth Error"})
           }
        }

    } catch {

    }
})

router.post('/liked', async function(req,res){
    try {
        const decoded = jwt.verify(req.headers.authorization,privateKey);
        const id = decoded.user;
        if (id){
            const user = await prisma.user.findUnique({
                where : {
                    id: id
                }
            })
            res.send({status: "OK", likes: user.likes});
        } else {
            res.send({status: "Auth Error"});
        }
    } catch (e) {
        res.send({status: "Error:" + e.message});
    }
})

router.post('/add_like', async function(req,res){
    try {
        const decoded = jwt.verify(req.headers.authorization,privateKey);
        const id = decoded.user;
        if (id){
            const user = await prisma.user.findUnique({
                where : {
                    id: id
                }
            })
            if (user.likes.includes(req.body.liked_id)){
                res.send({status : "NOTHING" , likes: user.likes})
            } else {
                const updatedUser = await prisma.user.update({
                    where :{
                        id : id
                    },
                    data : {
                        likes : [...user.likes, req.body.liked_id]
                    }
                });
                res.send({status : "OK", likes: [...user.likes, req.body.liked_id]})
            }
        } else {
            res.send({status: "Auth Error"});
        }
    } catch (e) {
        res.send({status: "Error:" + e.message});
    }
})

router.post('/remove_like', async function(req,res){
    try {
        const decoded = jwt.verify(req.headers.authorization,privateKey);
        const id = decoded.user;
        if (id){
            const user = await prisma.user.findUnique({
                where : {
                    id: id
                }
            })
            if (user.likes.includes(req.body.liked_id)){
                const newLikes = user.likes.filter(like => like !== req.body.liked_id)
                const updatedUser = await prisma.user.update({
                    where :{
                        id : id
                    },
                    data : {
                        likes : newLikes
                    }
                });
                res.send({status : "OK", likes: newLikes})
            } else {
                res.send({status : "NOTHING" , likes: user.likes})

            }
        } else {
            res.send({status: "Auth Error"});
        }
    } catch (e) {
        res.send({status: "Error:" + e.message});
    }
})

module.exports = router;