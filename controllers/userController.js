const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require('../model/userModel');

exports.login = async(req,res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    try{
        if(!user){
            return res.status(404).json({message:"User not found"});
        }
        const isValidPassword = await bcrypt.compare(password, user.password);
        if(!isValidPassword){
            return res.status(401).json({message:"Invalid password"});
        }
        const token = jwt.sign({ userId: user._id}, "secret_key",{
            expiresIn:"1h",
        });
        res.json({token});
    }catch(err){
        console.log(err);
    }
};

