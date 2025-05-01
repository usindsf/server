// server.js

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3000;

const showRoutes = require('./routes/showRoutes');
app.use(showRoutes);
// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Пример маршрута
app.get('/api', (req, res) => {
  res.json({ message: 'Добро пожаловать на сервер театральных билетов!' });
});

// Маршрут для спектаклей
app.get('/api/shows', (req, res) => {
  const shows = [
    { id: 1, title: 'Гамлет', date: '2025-04-10' },
    { id: 2, title: 'Ромео и Джульетта', date: '2025-04-12' }
  ];
  res.json(shows);
});

// Запуск сервера
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Сервер запущен на http://localhost:${PORT}`);
});
