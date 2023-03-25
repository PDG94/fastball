const Stripe = require("stripe");
require("dotenv").config();
const { STRIPE_SK } = process.env;

const stripe = new Stripe(
  STRIPE_SK
);
const checkOut = async (req, res) => {
  const { id, amount, desc } = req.body;
  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: desc,
      payment_method: id,
      
      confirm: true, //confirm the payment at the same time
    });
    res.send({ message: "Succesfull payment" });
  } catch (error) {
    res.json({ error: error.message });
  }
};

module.exports = checkOut;