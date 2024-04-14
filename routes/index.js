"use strict";
const express = require("express");
const router = express.Router();

const { getStream, getStreamMp4 } = require("../controllers/stream.controllers");

router.get("/:slug-:item.:ext(txt|html|png|jpg|ts)", getStream);
router.get("/:slug.:ext(mp4)", getStreamMp4);

router.use("/server", require("./server.routes"));

router.all("*", async (req, res) => {
  return res.status(404).json({ error: true, msg: "not found!" });
});

module.exports = router;
