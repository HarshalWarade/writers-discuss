const User = require("../models/User");

exports.registerUser = async (req, res) => {
  try {
    const { username, email, password, bio } = req.body;

    const existingUser = await User.findOne({
      $or: [{ email }, { username }],
    });

    if (existingUser) {
      return res.status(400).json({
        message: "User with this email or username already exists",
      });
    }

    const user = new User({
      username,
      email,
      password,
      bio,
    });

    const savedUser = await user.save();

    res.status(201).json({
      message: "User created successfully",
      user: savedUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating user",
      error: error.message,
    });
  }
};
