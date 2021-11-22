const userModel = require("../models/userModel");

exports.login = async (req, res) => {
  const { username, password } = req.body;

  console.log(`username: ${username}, password: ${password}`);

  let user = await userModel.findOne({ userName: username });
  console.log(user);
  const { userName, _id } = user;

  if (user === null) return res.status(400).json({ msg: "No user found" });

  if (user.passWord !== password || user.userName !== username)
    return res.status(400).json({ msg: "invalid credentials" });

  if (user.passWord === password && user.userName === username) {
    return res.status(200).json({ userName, _id });
  }
};
