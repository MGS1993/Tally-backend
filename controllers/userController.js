const userModel = require("../models/userModel");

exports.login = async (req, res) => {
  const { username, password } = req.body;
  let user = await userModel.findOne({ userName: username });

  if (user === null) return res.status(404).json({ msg: "No user found" });
  const { userName, _id } = user;

  if (user.passWord !== password || user.userName !== username)
    return res.status(400).json({ msg: "invalid credentials" });

  if (user.passWord === password && user.userName === username) {
    return res.status(200).json({ userName, _id });
  }
};

exports.getAllUsers = async (req, res) => {
  let users = await userModel.find({}).select("_id userName");

  if (users === undefined)
    return res.status(404).json({ msg: "No users found" });

  return res.status(200).json(users);
};
