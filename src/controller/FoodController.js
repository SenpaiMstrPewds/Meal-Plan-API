const Food = require("../entity/Food");

const createFood = async (req, res) => {
  try {
    const food = await Food.create(req.body);
    res.status(200).json(food);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "An error occurred " });
  }
};

const getFoodById = async (req, res) => {
  try {
    const food = await Food.findById(req.params.id);
    res.status(200).json(food);
  } catch (err) {
    console.log(err);
  }
};

const updateFoodById = async (req, res) => {
  try {
    const food = await Food.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(food);
  } catch (err) {
    console.log(err);
  }
};

const deleteFoodById = async (req, res) => {
  try {
    const food = await Food.findByIdAndDelete(req.params.id);
    res.status(200).json(food);
  } catch (err) {
    console.log(err);
  }
};

const getFoodList = async (req, res, next) => {
  try {
    const food = await Food.find();
    res.status(200).json(food);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createFood,
  getFoodById,
  getFoodList,
  updateFoodById,
  deleteFoodById,
};
