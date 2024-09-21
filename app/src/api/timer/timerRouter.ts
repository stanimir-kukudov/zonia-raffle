import { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import express, { type Router } from 'express';
import { z } from 'zod';
import { createApiResponse } from '@/api-docs/openAPIResponseBuilders';
import { timerController } from '@/api/timer/timerController';

export const userRegistry = new OpenAPIRegistry();
export const timerRouter: Router = express.Router();
export const TimerSchema = z.object({ timeLeft: z.number() });

userRegistry.register('Timer', TimerSchema);

userRegistry.registerPath({
  method: 'get',
  path: '/timer',
  tags: ['Timer'],
  responses: createApiResponse(TimerSchema, 'Success'),
});

timerRouter.get('/time-left', timerController.getTimeLeft);
