const cache = (req, res, next) => {
  const { query, method } = req;

  //before asking the api, check the local cache
  if (req.cacheObj[method][query.url]) {
    res.send(req.cacheObj[method][query.url]);
    console.log("Sending STALE data");
    return;
  }

  next();
};

module.exports = cache;
