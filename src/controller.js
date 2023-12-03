const fs = require("fs/promises");
const { DEFAULT_HEADER } = require("./util/util");
const path = require("path");
var qs = require("querystring");
let ejs = require("ejs");

const controller = {
  getHomePage: async (request, response) => {
    const database = await fs.readFile("./database/data.json", "utf8");
    const userArray = JSON.parse(database);

    const homePath = path.join(__dirname, "home.ejs");
    const template = await fs.readFile(homePath, "utf8");

    const renderedHtml = ejs.render(template, {
      userArray,
    });

    response.setHeader("Content-Type", "text/html");
    response.end(renderedHtml);
  },

  getFeed: async (request, response) => {
    const profile = await fs.readFile("./database/data.json", "utf8");
    const userProfile = JSON.parse(profile);
    response.writeHead(200, { "Content-Type": "text/html" });
    const feedPath = path.join(__dirname, "feed.ejs");
    try {
      const ejsTemplateFeed = await fs.readFile(feedPath, "utf8");
      const renderedTemplateFeed = ejs.render(ejsTemplateFeed, { userProfile });
      return response.end(renderedTemplateFeed);
    } catch (error) {
      console.error("Error rendering template:", error);
      response.writeHead(500, { "Content-Type": "text/plain" });
      return response.end("Server Error");
    }
  },

  uploadImages: (request, response) => {},
};

module.exports = controller;
