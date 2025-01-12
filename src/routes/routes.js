const express = require("express");
const router = express.Router();
const controller = require("../controllers/controllers.js");

let routes = (app) => {
  router.post("/upload", controller.upload);
  router.post("/uploadFromLink", controller.uploadFromLink);
  router.get("/files", controller.getListFiles);
  router.get("/files/:name", controller.download);

  app.use(router);
};

module.exports = routes;