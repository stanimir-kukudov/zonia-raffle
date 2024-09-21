import { ServiceResponse } from '@/common/models/serviceResponse';

export class TimerService {
  timeLeft(): ServiceResponse<{ timeLeft: number }> {
    const min = 30 * 60;
    const max = 2 * 60 * 60;
    const timeLeft = Math.floor(Math.random() * (max - min + 1)) + min;

    return ServiceResponse.success('Time left', { timeLeft });
  }
}

export const timerService = new TimerService();
