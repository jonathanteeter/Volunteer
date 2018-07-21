const router = require("express").Router();
const routes = require("./router");
const scrapeRoutes = require('./scrape')

router.use("/router", routes);

router.use('/scrape', scrapeRoutes);
module.exports = router;