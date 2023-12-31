const { parse } = require("url");
const { DEFAULT_HEADER } = require("./util/util.js");
const controller = require("./controller");
const { createReadStream } = require("fs");
const path = require("path");
const { request } = require("http");

const allRoutes = {
  // create a link to the profile pic for it to show up
  // GET: localhost:3000/ -> home page
  "/:get": (request, response) => {
    controller.getHomePage(request, response);
  },
  // POST: localhost:3000/form
  "/form:post": (request, response) => {
    controller.sendFormData(request, response);
  },
  // POST: localhost:3000/images
  "/images:post": (request, response) => {
    controller.uploadImages(request, response);
  },
  // GET: localhost:3000/feed?john123
  // Shows instagram profile for a given user
  "/feed:get": (request, response) => {
    controller.getFeed(request, response);
  },
  "/src/*:get": (request, response) => {
    controller.getImage(request, response);
  },
  // GET: when browswer wants some html from you
  // 404 routes
  default: (request, response) => {
    controller.pageNotFound(response);
  },
};

function handler(request, response) {
  const { url, method } = request;

  const { pathname } = parse(url, true);

  const key = Object.keys(allRoutes).find((route) => {
    const regex = new RegExp(`^${route.replace(/\*/g, ".*")}$`);
    return regex.test(`${pathname}:${method.toLowerCase()}`);
  });
  const chosen = allRoutes[key] || allRoutes.default;

  return Promise.resolve(chosen(request, response)).catch(
    handlerError(response)
  );
}

function handlerError(response) {
  return (error) => {
    console.log("Something bad has  happened**", error.stack);
    response.writeHead(500, DEFAULT_HEADER);
    response.write(
      JSON.stringify({
        error: "internet server error!!",
      })
    );

    return response.end();
  };
}

module.exports = handler;
