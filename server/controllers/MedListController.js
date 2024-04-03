const MedList = require("../models/MedList");

const saveMedList = async (req, res) => {
  try {
    const { name } = req.body;
    const medicine = new MedList({
      name,
    });
    await medicine.save();
    res.status(201).json({ message: "Drug saved successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllMedicines = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  try {
    const medicines = await MedList.find()
      .skip((page - 1) * limit)
      .limit(limit);

    res.json(medicines);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  saveMedList,
  getAllMedicines,
};
