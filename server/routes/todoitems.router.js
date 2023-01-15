const router = require("express").Router();

//import todo model
const todoItemsModel = require("../models/todoitems.model");

//First route -- We will add Todo item to our database
router.post("/api/item", async (req, res) => {
  try {
    const newItem = new todoItemsModel({
      item: req.body.item,
    });

    //save this item in database
    const saveItem = await newItem.save();
    res.status(200).json("Item Added successfully.");
  } catch (err) {
    res.json(err);
  }
});

//export router
module.exports = router;
