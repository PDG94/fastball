const Stripe = require("stripe");

const stripe = new Stripe(
  "sk_test_51MoJENC4TeWDJRMMGy5uUuK0SRJsk6FS9zQHTvdUXowy4D8gztl4PDeR8VokUZX9YwlwBZhdAObq86wGvq7GtSam00NFZes1Dw"
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