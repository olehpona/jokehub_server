var express = require('express');
var router = express.Router();
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

router.post("/add" , async function (req,res,next) {
    try{
        console.log(req)
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

})
router.post("/jokes",async function (req, res, next){
    try{
        if(req.body.id === "all"){
            if (req.body.type === "all"){
                res.send(await prisma.jokes.findMany())
            } else {
                res.send(await prisma.jokes.findMany({
                    where :{
                        type : req.body.type
                    }
                }))
            }

        }else {
            if (req.body.type === "all") {
                res.send(await prisma.jokes.findMany({
                    where: {
                        id: {
                            in: req.body.id
                        }
                    }
                }));
            } else {
                res.send(await prisma.jokes.findMany({
                    where: {
                        id: {
                            in: req.body.id
                        },
                        type: req.body.type
                    }
                }));
            }
        }
    } catch (e) {
        res.send("Internal error: " + e.message);
    }
})
router.post("/delete" ,async function (req,res,next) {
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
})
router.post("/update", async function (req,res,next){
    const prismaRes = await prisma.jokes.update({
        where : {
            id:req.body.id
        },
        data:{
            name : req.body.data.name,
            type: req.body.data.type,
            author : req.body.data.author,
            body : req.body.data.body
        }
    })
    res.send("OK");
})
module.exports = router;