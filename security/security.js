const fs = require('fs');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const privateKey = fs.readFileSync('./security/private.key');

async function checkAuth(req, res) {
    let token = req.headers.authorization;
    try {
        const decoded = jwt.verify(token,privateKey);
        let user = await prisma.user.findUnique({
            where : {
                id : decoded.user
            }
        })
        return await bcrypt.compare(decoded.password, user.password);
    } catch (e){
        console.log(e.message)
        return false
    }
}

module.exports = {privateKey, checkAuth}