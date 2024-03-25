const Pill = require("../models/pill");

exports.getDrugAndImageUrl = async (req, res) => {
  try {
    const { imprint, color, shape } = req.query;
    const query = {};
    if (imprint) query.imprint = new RegExp(imprint, "i");
    if (color) query.color = new RegExp(color, "i");
    if (shape) query.shape = new RegExp(shape, "i");

    const pills = await Pill.find(query, { drug: 1, imageUrl: 1, _id: 0 });
    res.json(pills);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addPill = async (req, res) => {
  const pill = new Pill({
    imprint: req.body.imprint,
    color: req.body.color,
    shape: req.body.shape,
    drug: req.body.drug,
    imageUrl: req.body.imageUrl,
  });
  try {
    const newPill = await pill.save();
    res.status(201).json(newPill);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
