require('dotenv').config();
/**
 * Constrói lista de origens permitidas (CSV em CORS_ORIGINS).
 * Se vazio, permite qualquer origem.
 */
function getAllowedOrigins() {
  const csv = process.env.CORS_ORIGINS || '';
  return csv
    .split(',')
    .map((s) => s.trim())
    .filter((s) => s.length > 0);
}

const allowed = getAllowedOrigins();

/**
 * Opções de CORS com whitelist e tratamento de preflight.
 */
const corsOptions = {
  origin(origin, callback) {
    if (!origin || allowed.length === 0 || allowed.includes(origin)) {
      callback(null, true);
      return;
    }
    callback(new Error('Not allowed by CORS'));
  },
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 204,
};

module.exports = { corsOptions };

