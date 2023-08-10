const axios = require("axios");
const https = require("https");

const forwarder = async (req, res, next) => {
  const { query, headers, method, body } = req;

  //try and get data
  try {
    const instance = axios.create({
      httpsAgent: new https.Agent({
        rejectUnauthorized: false,
      }),
    });
    const apiResponse = await instance[method.toLowerCase()](query.url);

    //if data, store it
    req.cacheObj[method][query.url] = {
      data: apiResponse.data,
      entryDate: Date.now(),
    };

    res.send(apiResponse.data);
    console.log("Sending NEW data");
  } catch (error) {
    console.log(error);
    res.send("Request failed, check the docs");
  }
};

module.exports = forwarder;
