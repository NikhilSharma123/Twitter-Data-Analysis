const express = require("express");
const server = express();
// const embeddedUrl = require("./Routes/embeddedUrl");
const homeTimeline = require("./Routes/homeTimeline");

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static('public'));

server.use("/getHomeTimeline", homeTimeline);
// server.use("/getEmbeddedUrl", embeddedUrl);

server.listen(2706, () => {
  console.log("Server running at localhost:2706");
});