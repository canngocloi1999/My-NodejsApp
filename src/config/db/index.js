const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/nodejs_ex', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log('conect successfully!!!')
    } catch (error) {
        console.log('conect fail!!!')
    }
}

module.exports = { connect };