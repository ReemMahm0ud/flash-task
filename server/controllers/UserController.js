const User = require("../models/UserModel");

const isRegisteredCheck = async (req, res) => {
  const customer = req.body;
  let isRegistered = false;

  // check if user registered or not
  const user = await User.findOne({ phone: customer.phone });

  if (user) {
    isRegistered = true;
  }
  return res.status(200).json(isRegistered);
};

module.exports = {
  isRegisteredCheck,
};
