const getUsers = require("../models/getPatient");

exports.getUsers = async (req, res) => {
  try {
    const getusers = await getUsers.find();
    res.status(200).json(getusers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
