import type { Request, RequestHandler, Response } from 'express';
import { handleServiceResponse } from '@/common/utils/httpHandlers';
import { timerService } from '@/api/timer/timerService';

class TimerController {
  public getTimeLeft: RequestHandler = async (_req: Request, res: Response) => {
    const serviceResponse = timerService.timeLeft();
    return handleServiceResponse(serviceResponse, res);
  };
}

export const timerController = new TimerController();
