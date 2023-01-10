const admins = require('../MODEL/adminSchema')
const users = require('../MODEL/userSchema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv/config')

module.exports = {
    postLogin:async(req,res)=>{
        let admin = await admins.findOne({adminEmail:req.body.adminEmail})
        console.log(admin);
        if(!admin)return res.status(404).json({message:'admin not found'})
        bcrypt.compare(req.body.password,admin.password).then((response)=>{
            if(!response) return res.status(401).json({message:'password mismatch'})
            const token = jwt.sign({
                id: admin._id
            }, process.env.JWT_SECRET);
            res.status(200).json({ token });
        })
    },
    getUsers:async(req,res)=>{
        await users.find({}).then((response)=>{
            res.json(response)
        })
    },
    deleteUser:async(req,res)=>{
        console.log(req.query.id)
        await users.deleteOne({_id:req.query.id}).then((response)=>{
            res.redirect('/admin/userDetails')
        })
    }
}