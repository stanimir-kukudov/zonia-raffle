import cors from 'cors';
import express, { type Express } from 'express';
import helmet from 'helmet';
import { pino } from 'pino';
import { openAPIRouter } from '@/api-docs/openAPIRouter';
import { healthCheckRouter } from '@/api/healthCheck/healthCheckRouter';
import { userRouter } from '@/api/user/userRouter';
import errorHandler from '@/common/middleware/errorHandler';
import rateLimiter from '@/common/middleware/rateLimiter';
import requestLogger from '@/common/middleware/requestLogger';
import { env } from '@/common/utils/envConfig';
import { myDataSource } from '@/app-data-source';
import { timerRouter } from '@/api/timer/timerRouter';
const logger = pino({ name: 'server start' });
const app: Express = express();

myDataSource
  .initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err);
  });

app.set('trust proxy', true);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: env.CORS_ORIGIN, credentials: true }));
app.use(helmet());
if (process.env.NODE_ENV === 'production') {
  app.use(rateLimiter);
}
app.use(requestLogger);

app.use('/api/health-check', healthCheckRouter);
app.use('/api/users', userRouter);
app.use('/api/timer', timerRouter);

app.use(openAPIRouter);

app.use(errorHandler());

export { app, logger };
