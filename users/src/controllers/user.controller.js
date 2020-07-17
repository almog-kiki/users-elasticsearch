const UserModel = require('../models/user.model');

exports.create = async function (req, res){
    try{
        const user = new UserModel(req.body);
        const savedUser = await user.save();
        savedUser.on('es-indexed', () => {
            mainModule.utils.log('document indexed ', JSON.stringify(savedUser));
        });
        mainModule.requestUtils.successResponse(res, savedUser, "New user created ")
    }catch(error){
        mainModule.requestUtils.failureResponse(res, error, "create")
    }   
}