// Import Router and models
const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

// Listens for GET requests to retrieve all categories
router.get("/", async (req, res) => {
  try {
    // Use 'Category.findAll()' method to find all categories
    const categoryData = await Category.findAll({
      include: [{ model: Product }], // Include associated products in each category
    });
    // Send retrieved category data if successful
    res.status(200).json(categoryData);
  } catch (err) {
    // Send error details if error occurred
    res.status(500).json(err);
  }
});

// Listens for GET requests to retrieve a single category by its `id` value
router.get("/:id", async (req, res) => {
  try {
    // Use 'Category.findByPk()' method to find a category by its primary key (id)
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    // Send the retrieved category data if successful
    res.status(200).json(categoryData);
  } catch (err) {
    // Send error details if error occurred
    res.status(500).json(err);
  }
});

router.post("/", (req, res) => {
  // create a new category
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
