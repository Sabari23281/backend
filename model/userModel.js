const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


//Hash password before saving user to database
UserSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
})