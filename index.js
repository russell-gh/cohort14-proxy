const express = require("express");
const app = express();
const validate = require("./middleware/validate");
const cache = require("./middleware/cache");
const forwarder = require("./middleware/forwarder");
const cors = require("cors");

const cacheObj = { GET: {}, POST: {}, PUT: {}, PATCH: {}, DELETE: {} };

app.use(cors());

app.use((req, res, next) => {
  req.cacheObj = cacheObj;
  next();
});

app.use(validate);

app.use(cache);

app.use(forwarder);

//tidy up
// setInterval(() => {
//   const get = Object.entries(cacheObj.GET);
//   //delete old data
//   for (let i = 0; i < get.length; i++) {
//     //if an item is too old, delete it
//     if (get[i][1].entryDate < Date.now() - 9000) {
//       delete cacheObj.GET[get[i][0]];
//     }
//   }
// }, 5000);

const port = process.env.PORT || 6001;
app.listen(port, () => {
  console.log("Server running on port: ", port);
});
