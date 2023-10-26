var express = require('express');
var router = express.Router();
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

router.post("/add" , async function (req,res,next) {
    await prisma.jokes.create({
        data: {
            name : req.body.name,
            type: req.body.type,
            author : req.body.author,
            body : req.body.body
        }
    })
    res.send("OK")
})
router.post("/jokes",async function (req, res, next){
    if(req.body.id === "all"){
        res.send(await prisma.jokes.findMany())
    }else{
        res.send(await prisma.jokes.findMany({
            where : {
                id :{
                   in : req.body.id
                }
            }
        }));
    }
})
module.exports = router;