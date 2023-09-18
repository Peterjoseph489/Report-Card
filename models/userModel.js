const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        default: function () {
            return `${firstName} ${LastName}`
        }
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmPassword: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    phoneNo: {
        type: String
    }
});

const userModel = mongoose.model(User, userSchema);

module.exports = { userModel };