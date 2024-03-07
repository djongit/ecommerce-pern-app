const bcrypt = require('../modules/moduleBcrypt');
const ModelUser = require('../models/modelUser');
const queryUserRequest = new ModelUser();


module.exports = class ControllerAuth {
    async register (data) {
        const {email, password} = data;

        try  {
            const userExist = await queryUserRequest.findUserByEmail(email);
            if(userExist) {
                const error = new Error('User already exists!');
                error.status = 400; // Bad request for duplicate user
                throw error;
            }
            const hashedPassword = await bcrypt.toHash(password);
            data.password = hashedPassword;
            return await queryUserRequest.createUser(data);
        } catch (error) {
            throw error;
        }
    }
    
    async login (data) {
        const { email, password } = data;
        // console.log('this is controller log in data: ',data);
        try {
            const userExist = await queryUserRequest.findUserByEmail(email);
            
            // console.log('this is controller bcrypt: ', !bcrypt.toCompare(password, userExist.password));
            if(!userExist) {
                
                const error = new Error( 'Incorrect password or username.');
                error.status = 401;
                throw error;
            }
                //      -- Uses bcrypt to compare hashed passwords --
                const passwordMatch = await bcrypt.toCompare(password, userExist.password);
            if ( !passwordMatch) {
                
                const error = new Error( 'Incorrect password or usernamee.');
                error.status = 401;
                throw error;              
            }
            console.log('this is controller userExist: ', userExist);
            return userExist;
        } catch(error) {
            console.log('this is controller error: ', error);
            throw (error); 

        }
 
    }
};