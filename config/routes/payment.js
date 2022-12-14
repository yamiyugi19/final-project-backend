const router = require("express").Router();

// controller
const payment = require("../../app/controllers/paymentController");

// middleware
const Authentication = require("../../middlewares/authenticate");

router.get("/", payment.getPayment);
router.put("/", Authentication, payment.createPayment);
router.get("/:id", payment.getPaymentById);


module.exports = router;
