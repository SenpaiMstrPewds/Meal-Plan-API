const router = require("express").Router();

const FoodController = require("../controller/FoodController");

router.post("/create", FoodController.createFood);

router.get("/single/:id", FoodController.getFoodById);

router.get("/", FoodController.getFoodList);

router.put("/update/:id", FoodController.updateFoodById);

router.delete("/delete/:id", FoodController.deleteFoodById);

module.exports = router;
