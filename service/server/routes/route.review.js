const router = require('express').Router();
const controller = require('../controllers/controller.review.js')

router.get("/:product_id", controller.getAll);


module.exports = router