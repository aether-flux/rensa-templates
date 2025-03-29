// import { homeIndex } from "../controllers/homeController"
const homeIndex = require("../controllers/homeController");

module.exports = function homeRoute (app) {
  app.get("/", (req, res) => {
    homeIndex(req, res);
  })
}
