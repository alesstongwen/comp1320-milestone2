const fs = require("fs/promises");
const { DEFAULT_HEADER } = require("./util/util");
const path = require("path");
var qs = require("querystring");
let ejs = require("ejs");
const { createReadStream } = require("fs");
const handler = require("./handler.js");
const formidable = require("formidable");

const controller = {
  // move the 404 logic here so I can call it later in controler.js
  pageNotFound: (response) => {
    response.writeHead(404, DEFAULT_HEADER);
    createReadStream(path.join(__dirname, "views", "404.html"), "utf8").pipe(
      response
    );
  },
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
  getImage: async (request, response) => {
    const filePath = path.join(__dirname, request.url.replace(/^\/src\//, ""));
    const stream = createReadStream(filePath);

    stream.on("error", (error) => {
      if (error.code === "ENOENT") {
        // File not found
        return pageNotFound(response);
      } else {
        // Other errors
        console.error(`Error reading file: ${error.message}`);
        response.writeHead(500, DEFAULT_HEADER);
        response.end("Internal Server Error");
      }
    });
    stream.pipe(response);
  },
  // uploadImages: (request, response) => {},
};

module.exports = controller;
