// routes/showRoutes.js
const express = require('express');
const router = express.Router();

let shows = [
  { id: 1, title: 'Гамлет', description: 'Классическая трагедия Шекспира' },
];

// Получить все спектакли
router.get('/api/shows', (req, res) => {
  res.json(shows);
});

// Добавить новый спектакль
router.post('/api/shows', (req, res) => {
  const newShow = {
    id: Date.now(),
    title: req.body.title,
    description: req.body.description
  };
  shows.push(newShow);
  res.status(201).json(newShow);
});

// И другие маршруты...

module.exports = router;
