import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/**
 * Normaliza e valida a porta. Fallback padrão: 3001.
 */
function getPort(): number {
  const raw = process.env.PORT ?? '3001';
  const n = Number(raw);
  if (!Number.isFinite(n) || n <= 0 || n >= 65536) return 3001;
  return n;
}

/**
 * Constrói lista de origens permitidas a partir de CORS_ORIGINS (CSV).
 * Se vazio, permite qualquer origem.
 */
function getAllowedOrigins(): string[] {
  const csv = process.env.CORS_ORIGINS ?? '';
  return csv
    .split(',')
    .map((s) => s.trim())
    .filter((s) => s.length > 0);
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const allowed = getAllowedOrigins();
  app.enableCors({
    origin: (origin, callback) => {
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
  });

  const port = getPort();
  await app.listen(port);
}
bootstrap();
