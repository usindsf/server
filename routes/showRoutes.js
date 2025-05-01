const express = require("express");
const router = express.Router();
const db = require("../models");

// Получить все спектакли
router.get("/api/shows", async (req, res) => {
  try {
    const shows = await db.Performance.findAll();
    res.json(shows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Добавить новый спектакль
router.post("/api/shows", async (req, res) => {
  try {
    const show = await db.Performance.create(req.body);
    res.status(201).json(show);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
