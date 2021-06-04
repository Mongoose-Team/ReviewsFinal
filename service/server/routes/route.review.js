const router = require('express').Router();
const controller = require('../controllers/controller.review.js')

router.get("/:product_id", controller.getAll);
router.get('/meta/:product_id', controller.displayReview)

module.exports = router