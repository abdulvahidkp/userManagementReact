const users = require('../MODEL/userSchema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv/config')


module.exports = {
    postSignup: async (req, res) => {
        let newUser = req.body;
        newUser.password = await bcrypt.hash(newUser.password, 10);
        await users.create(newUser).then((response) => {
            const token = jwt.sign({
                id: response._id
            }, process.env.JWT_SECRET);
            res.status(201).json({ token });
        }).catch((err) => console.log(err.message))
    },
    postLogin: async (req, res) => {
        let user = await users.findOne({ userEmail: req.body.userEmail })
        if (!user) {
            return res.status(400).json({ message: 'there have no user' })
        }
        bcrypt.compare(req.body.password,user.password).then((response) => {
            if (response) {
                const token = jwt.sign({
                    id: user._id
                }, process.env.JWT_SECRET);
                res.status(200).json({ token });
            }else{
                res.status(401).json({message:'unauthorized' });
            }
        }).catch(err => console.log(err.message))

    },
    getHome: async (req, res) => {
        await users.findOne({ _id: req.query.id }).then((response) => {
            res.status(200).json(response);
        })
    },
    updateProfile: async (req, res) => {
        console.log(req.query);
        await users.updateOne({ _id: req.query.id},{$set:{imageUrl:req.query.imageUrl}}).then(response=>{
            res.status(200).json({message:"image updated successfully"})
        })
    }
}