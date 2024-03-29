const db = require('../db');
pgp = require('pg-promise')({capSQL: true});
module.exports = class ModelUser {
    getDate () {
        const timestamp = new Date(Date.now());
        return timestamp;
    }

    async findUserByEmail (email) {
        try {
           const psqlCommand = 'SELECT * FROM users WHERE email = $1';
           const value = [email];
        //    console.log('this is model email: ', email);
           const result = await db.query(psqlCommand, value);
           console.log('name result: ', result);
           return result.rows?.length ? result.rows[0] : null;

        } catch(error) {
            throw new Error('Unable to find email modelUser' + error);
        }
    }
    async createUser (data) {
        console.log('this is model data: ', data);
        try {
            const created = this.getDate();
            const psqlCommand = 'INSERT INTO users(email, password, first_name, last_name, delivery_address, billing_address, created, modified, google, facebook) VALUES ($1, $2, $3, $4, $5, $6, $7, NULL, $8, $9) RETURNING *';
            const {email, password, first_name, last_name, delivery_address, billing_address, google, facebook} = data;
            const values = [email, password, first_name, last_name, delivery_address, billing_address, created, google, facebook];
            const result = await db.query(psqlCommand, values);            
             return result.rows?.length ? result.rows[0] : null;
            // return result.rows.length ? result.rows[0] : null;
        } catch (error) {
            throw new Error('Unable to create modelUser' + error);
        }
    }

    async updateUser (data) {
        
        try {
            const {id, ...params} = data;
            const condition = pgp.as.format('WHERE id = ${id} RETURNING *', id);
            const psqlCommand = pgp.helper.update(params, null, 'users') + condition;
            const result = await db.query(psqlCommand);
            return result.rows?.length? result.rows[0] : null;
        } catch (error) {
            throw new Error('Unable to update user modelUser', error);
        }
    }

    async getUserById (id) {
        try{
            const psqlCommand = 'SELECT * WHERE user_id = $1';
            const value = [id];
            const result = await db.query(psqlCommand, value);
            return result.rows?.length? result.rows[0] : null;
        } catch (error) {
            throw new Error('Unable to get by Id modelUser', error);
        }
    }

    async modelUserFindUserByGoogleId (id) {
        
        try {
            // console.log('Model find google user: ', id);
            const psqlCommand = `SELECT * FROM users WHERE google ->> 'id' = $1`;
            const value = [id];
            const result = await db.query(psqlCommand, value);
            // console.log('this is model google use result: ', result);
            return result.rows?.length? result.rows[0] : null;

        } catch(error) {
            console.log('this is model google errorrrr: ', error);
            throw new Error('Unable to find by Google id modelUser', error);
        }
    }

    async modelUserFindUserByFacebookId (id) {
        try {
            const psqlCommand = `SELECT * FROM users WHERE facebook ->> 'id' = $1`;
            const value = [id];
            const result = await db.query(psqlCommand, value);
            return result.rows?.length ? result.rows[0] : null;
        } catch (error) {
            throw new Error('Unable to find by Facebook id modelUser', error);
        }
    }
}

