const User = require('../models/user');
// const sendToken = require('../utils/jwtToken');
// const sendEmail = require('../utils/sendEmail')
const crypto = require('crypto')
const cloudinary = require('cloudinary')

exports.registerUser = async (req, res, next) => {
   
    const result = await cloudinary.v2.uploader.upload(req.body.avatar, {
        folder: 'avatars',
        width: 150,
        crop: "scale"
    }, (err, res) => {
        console.log(err, res);
    });
    console.log(result)
    const { name, email, password,  } = req.body;
    const user = await User.create({
        name,
        email,
        password,
        avatar: {
            public_id: result.public_id,
            url: result.secure_url
        },
    })
    //test token
     const token = user.getJwtToken();

    return  res.status(201).json({
      	success:true,
      	user,
     	token
      })
    // sendToken(user, 200, res)
}

exports.loginUser = async (req, res, next) => {
    const { email, password } = req.body;

    // Checks if email and password is entered by user
    if (!email || !password) {
        return res.status(400).json({ error: 'Please enter email & password' })
    }
  

    // Finding user in database
    // const userPass = await User.findOne({ email }).select('+password')
    let user = await User.findOne({ email }).select('+password')
    if (!user) {
        return res.status(401).json({ message: 'Invalid Email or Password' })
    }
   

    // Checks if password is correct or not
    const isPasswordMatched = await user.comparePassword(password);

   
    if (!isPasswordMatched) {
        return res.status(401).json({ message: 'Invalid Email or Password' })
    }
    const token = user.getJwtToken();

     return res.status(201).json({
     	success:true,
        user,
     	token
     });
    //  user = await User.findOne({ email })
    // sendToken(user, 200, res)
}

exports.getUserProfile = async (req, res, next) => {
    const user = await User.findById(req.user.id);

    res.status(200).json({
        success: true,
        user
    })
}
