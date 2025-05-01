// server.js


const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const showRoutes = require('./routes/showRoutes');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(showRoutes);
// Пример маршрута
app.get('/api', (req, res) => {
  res.json({ message: 'Добро пожаловать на сервер театральных билетов!' });
});

// Маршрут для спектаклей


// Запуск сервера
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Сервер запущен на http://localhost:${PORT}`);
});
