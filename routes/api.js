var express = require('express');
var router = express.Router();
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const {checkAuth} = require("../security/security");



router.post("/add" , async function (req,res,next) {
    if (await checkAuth(req,res)){
        try{
            await prisma.jokes.create({
                data: {
                    name : req.body.name,
                    type: req.body.type,
                    author : req.body.author,
                    body : req.body.body
                }
            })
            res.send("OK")
        } catch (e) {
            res.send("Internal error: " + e.message);
        }
    } else {
        res.sendStatus(401);
    }
})
router.post("/jokes",async function (req, res, next){
    let response;
    if (await checkAuth(req,res)){
        try{
            if(req.body.id === "all"){
                if (req.body.type === "all"){
                    response= await prisma.jokes.findMany();
                } else {
                    response= await prisma.jokes.findMany({
                        where :{
                            type : req.body.type
                        }
                    })
                }
            }else {
                if (req.body.type === "all") {
                    response= await prisma.jokes.findMany({
                        where: {
                            id: {
                                in: req.body.id
                            }
                        }
                    });
                } else {
                    response= await prisma.jokes.findMany({
                        where: {
                            id: {
                                in: req.body.id
                            },
                            type: req.body.type
                        }
                    });
                }
            }
            if (req.body.sort === "up"){
                response.sort((a,b)=>b.likes-a.likes)
                res.send(response)
            } else {
                res.send(response)
            }
        } catch (e) {
            res.send("Internal error: " + e.message);
        }
    } else {
        res.sendStatus(401);
    }

})
router.post("/delete" ,async function (req,res,next) {
    if (await checkAuth(req,res)){
        console.log(req.body.id);
        try{
            let prismaRes = await prisma.jokes.delete({
                where:{
                    id: req.body.id
                }
            })
            res.send("OK");
        } catch (e){
            res.send("Internal error: "+e.message)
        }
    } else {
        res.sendStatus(401);
    }

})
router.post("/update", async function (req,res,next){
    console.log(req.body);
    if (await checkAuth(req,res)){
        const prismaRes = await prisma.jokes.update({
            where : {
                id:req.body.id
            },
            data:{
                name : req.body.data.name,
                type: req.body.data.type,
                author : req.body.data.author,
                body : req.body.data.text
            }
        })
        console.log(prismaRes)
        res.send("OK");
    } else {
        res.sendStatus(401);
    }

})
router.post("/rating", async function (req,res,next){
    if (await checkAuth(req,res)){
        const last = await prisma.jokes.findFirst({
            where :{
                id:req.body.id
            }
        })
        try {
            if (req.body.type === "up"){
                const prismaRes = await prisma.jokes.update({
                    where : {
                        id:req.body.id
                    },
                    data:{
                        likes: ++last.likes
                    }
                })
                res.send("OK");
            } else {
                const prismaRes = await prisma.jokes.update({
                    where : {
                        id:req.body.id
                    },
                    data:{
                        likes: --last.likes
                    }
                })
                res.send("OK");
            }
        } catch (e) {
            res.send("Internal error: " + e.massage);
        }
    } else {
        res.sendStatus(401);
    }

})

module.exports = router;