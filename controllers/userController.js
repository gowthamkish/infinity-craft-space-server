const { generateToken } = require("../authentication/auth");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      throw new Error("User not found");
    }
    const isPasswordValid = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordValid) {
      throw new Error("Incorrect password");
    }
    const token = generateToken(existingUser);
    res.json({ token: token });
  } catch (error) {
    res.status(401).json({ message: "Invalid credentials" });
  }
};

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const createdUser = new User({
      name,
      email,
      password: hashedPassword,
      role: "customer",
    });

    const savedUser = await createdUser.save();
    res
      .status(201)
      .json({ user: savedUser, message: "User created successfully" });
  } catch (error) {
    // console.log(error);
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  loginUser,
  registerUser,
};
