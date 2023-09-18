const { userModel } = require('../models/userModel');
const cloudinary = require('../utilities/cloudinary');
const fs = require('fs');

const register = async (req, res) => {
    try {
        // const 
    } catch (error) {
        res.status(500).json({
            data: error.message
        })
    }
};