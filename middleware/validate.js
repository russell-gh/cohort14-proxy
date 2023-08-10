const { urlValid } = require("../utils");

const validate = (req, res, next) => {
  const { query } = req;

  //check we have an url
  if (!query.url) {
    res.send("PARAMS!!!");
    return;
  }

  //check the url is valid
  if (!urlValid(query.url)) {
    res.send("Invalid URL!!!!");
    return;
  }

  next();
};

module.exports = validate;
