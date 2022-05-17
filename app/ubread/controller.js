const ubread = require('./model');
const { ObjectID } = require('mongodb');

const login = async(req, res, next) => {
    try {
        const {email, password} = req.query;

        const resultEmail = await ubread.findOne({email: email});
        if(resultEmail !== null) {
            const resultPassword = await ubread.findOne({email: email, password: password});
            if(resultPassword !== null) {
                res.send({
                    status: 'berhasil',
                    message: "user ditemukan",
                    data: resultPassword,
                });
            }
            else {
                res.send({
                    status: 'gagal',
                    message: "password salah",
                    // data: resultPassword,
                });
            }
        }
        else { 
            res.send({
                status: 'gagal',
                message: "Email not found",
                // data: resultEmail,
            });
        }
    }
    catch(e) {
        res.send({
            status: 'gagal',
            message: 'Server have a problem',
        });
        console.log(e.message);
        console.log(`e.message`);
    }
};

const createAccount = async(req, res, next) => {
    try {
        const {userName, email, password} = req.body;

        const resultEmail = await ubread.findOne({email: email});
        
        if(resultEmail === null) {
            const result = await ubread.create({
                username: userName,
                email: email,
                password: password,
            });
    
            res.send({
                status: 'berhasil',
                message: 'Account Created Success',
                data: result,
            });
        }
        else {
            res.send({
                status: 'gagal',
                message: 'Account Already Exists',
                data: result,
            });
        }
    }
    catch(e) {
        console.log(e.message)
        res.send({
            status: 'gagal',
            message: 'Failed to Create Account',
        });
    }
};

module.exports = {
    login,
    createAccount,
};
