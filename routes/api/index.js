const router = require("express").Router();
const bookRoutes = require("./books");
// const bookRoutes = require("./books");

// Book routes
// router.use("/books", )
router.use("/books", bookRoutes);

module.exports = router;
