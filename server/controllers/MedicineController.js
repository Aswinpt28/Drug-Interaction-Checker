const Medicine = require("../models/Medicine");

exports.saveMedicine = async (req, res) => {
  try {
    const { name, sideEffects } = req.body;
    const medicine = new Medicine({ name, sideEffects });
    await medicine.save();
    res.status(201).json({ message: "Drug saved successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getSideEffects = async (req, res) => {
  const { name } = req.query;

  console.log("Medicine Name:", name);

  try {
    const medicine = await Medicine.findOne({ name: name });
    console.log("Medicine:", medicine);

    if (!medicine) {
      console.log("Medicine not found in the database");
      return res.status(404).json({ message: "Medicine not found" });
    }

    const sideEffects = medicine.sideEffects;
    res.json({ sideEffects });
  } catch (error) {
    console.error("Error fetching medicine:", error);
    res.status(500).json({ message: "Server Error" });
  }
};
