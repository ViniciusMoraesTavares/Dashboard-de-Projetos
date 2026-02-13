require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { corsOptions } = require('./config/cors');
const app = express();

/**
 * Normaliza e valida a porta. Fallback padrão: 3000.
 */
function getPort() {
  const raw = process.env.PORT || '3000';
  const n = Number(raw);
  if (!Number.isFinite(n) || n <= 0 || n >= 65536) return 3000;
  return n;
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home');
});

const port = getPort();
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
