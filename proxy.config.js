const PROXY_CONFIG = {
  "/api": {
    target: "https://api.desearch.com",
    changeOrigin: true,
    logLevel: "debug"
  }


};

module.exports = PROXY_CONFIG;
