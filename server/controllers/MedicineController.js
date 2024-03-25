const Medicine = require("../models/Medicine");

exports.getSideEffects = async (req, res) => {
  const { medicineName } = req.body;

  console.log("Medicine Name:", medicineName);

  try {
    const medicine = await Medicine.findOne({ name: medicineName });
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
