var express = require('express')
var router= express.Router();
var controller= require('../controllers/review.controller')
router.get("/:product_id", controller.getAll);
router.get('/:product_id', controller.displayReview)
module.exports=router;