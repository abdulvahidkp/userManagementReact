const users = require('../MODEL/userSchema')

module.exports = {
    getLogin:(req,res)=>{
        res.send('hello world');
    },
    postLogin:async(req,res)=>{
        const credentials = req.body;
    }
}