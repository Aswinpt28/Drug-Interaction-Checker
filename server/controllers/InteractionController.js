const Interaction = require("../models/Interaction");

exports.saveInteraction = async (req, res) => {
  try {
    const { drugName, symptoms } = req.body;
    const interaction = new Interaction({
      drugName,
      symptoms,
    });
    await interaction.save();
    res.status(201).json({ message: "Interaction saved successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.checkInteractions = async (req, res) => {
  const { medicines } = req.body;

  if (!medicines || medicines.length < 2) {
    return res
      .status(400)
      .json({ error: "Please provide at least 2 medicines" });
  }

  try {
    const interactions = await Interaction.find({
      drugName: { $in: medicines },
    });

    if (interactions.length === 0) {
      return res.status(404).json({
        error:
          "No matching interactions found. Please check your input and try again.",
      });
    }

    const symptoms = interactions
      .map((interaction) => interaction.symptoms)
      .sort(() => Math.random() - 0.5)[0];

    return res.status(200).json({ symptoms }); // Added return statement here
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
