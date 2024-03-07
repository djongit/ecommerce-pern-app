const bcrypt = require ('bcrypt');



const ttoHash = async (password, saltRounds = 25)=> {
    try {
        console.log('this is toHash input: ', password);
        const salt = await bcrypt.genSalt(saltRounds);
        console.log('this is salt: ', salt);
        const hashedPass = await bcrypt.hash(password, salt);
        console.log('this is hashed password: ', hashedPass);
        return hashedPass;
    } catch (error) {
        console.error(error);
        throw error;
    }
    return null;
 }

 ttoHash('1');