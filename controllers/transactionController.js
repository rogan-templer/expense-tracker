const Transaction = require("../models/Transaction");

// get all transactions
// @route GET /api/v1/transactions

//When you use mongoose methods you return a promise and this is why async await is used here.

exports.getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find();

    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions,
    });
  } catch (err) {
    return res.send(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// add a transactions
// @route POST /api/v1/transactions

exports.addTransaction = async (req, res, next) => {
  res.send("POST transactions");
};

// delete a transactions
// @route DELETE /api/v1/transactions/:id

exports.deleteTransaction = async (req, res, next) => {
  res.send("DELETE transactions");
};
