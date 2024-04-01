const express = require("express");
const route = express.Router();
const bcrypt = require("bcrypt");
const cookie = require("cookie");
const jwt = require("jsonwebtoken");
const User = require("../Models/User");
const authMiddleware = require("../Middleware/authMiddleware");

route.get("/users", authMiddleware, async (req, res) => {
try {
if (req.user.role === "admin") {
const users = await User.find();
res.status(200).json(users);
} else {
 res.status(403).json({ message: "ma3ndkch l7a9" });
  }
} catch (er) {
res.status(500).json({ message: er.message });
 }
});

route.post("/register", async (req, res) => {
  const { username, email, password, role } = req.body;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return res.status(400).json({ message: "user already exits" });
  }

  const hashedpass = await bcrypt.hash(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashedpass,
    role: role || "user",
  });

  await newUser.save();

  res.status(200).json({
    message: "rak nadi",
    username: newUser.username,
    email: newUser.email,
    role: newUser.role,
  });
});

// route.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(400).json({ message: "had email makaynch" });
//     }

//     const passwwordMatch = await bcrypt.compare(password, user.password);
//     if (!passwwordMatch) {
//       return res.status(400).json({ message: "had password makhdamch" });
//     }

//     const token = jwt.sign(
//       { userId: user._id, username: user.username },
//       process.env.JWT_SECRET,
//       { expiresIn: "30d" }
//     );

//     res.cookie("token", token, {
//       httpOnly: true,
//       maxAge: 30 * 24 * 60 * 60,
//       path: "/",
//     });

//     res.status(200).json({
//       message: "login successfuly",
//       token,
//       user: {
//         email: user.email,
//         username: user.username,
//         id: user._id,
//         role: user.role,
//       },
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// route.post("/logout", async (req, res) => {
//   try {
//     res.setHeader(
//       "cookie",
//       cookie.serialize("token", "", {
//         httpOnly: true,
//         path: "/",
//         expires: new Date(0),
//       })
//     );
//     res.status(200).json({ message: "rak bra" });
//   } catch (er) {
//     res.status(500).json({ message: "kayn mochkil" });
//   }
// });

module.exports = route;
