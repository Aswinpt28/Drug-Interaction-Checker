// controllers/AddDrugsController.js
const Drug = require("../models/AddDrugs");

exports.saveDrug = async (req, res) => {
  try {
    const { drugName, dosage, indication, dateOfIssue } = req.body;
    const drug = new Drug({ drugName, dosage, indication, dateOfIssue });
    await drug.save();
    res.status(201).json({ message: "Drug saved successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllDrugs = async (req, res) => {
  try {
    const drugs = await Drug.find();
    res.status(200).json(drugs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
