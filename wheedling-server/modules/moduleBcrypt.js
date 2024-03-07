const bcrypt = require('bcrypt');

module.exports = class Bcrypt{
    //    -- Create hashed password --
 static async toHash (password, saltRounds = 12) {
    try {
        // console.log('this is toHash input: ', password);
      const salt = await bcrypt.genSalt(saltRounds);
    //   console.log('this is salt: ', salt);
      const hashedPass = await bcrypt.hash(password, salt);
    //   console.log('this is hashed password: ', hashedPass);
      return hashedPass;
  } catch (error) {
      console.error(error);
      throw error;
  }
    return null;
 }
    //   -- Compare hashed passwords --
static async toCompare (password, hash) {
    try {
        // const stPassword = password.toString();
        // console.log('this is bcrypt compare pass: ', password);
        // console.log('this is bcrypt compare hash: ', hash);
        const match = await bcrypt.compare(password, hash);
        // console.log('this is match: ', match);
        return match;
    } catch(error) {
        console.error(error);
        throw error;
    }
    return false;
 }
};