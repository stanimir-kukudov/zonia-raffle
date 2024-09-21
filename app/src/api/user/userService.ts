import { StatusCodes } from 'http-status-codes';

import { ServiceResponse } from '@/common/models/serviceResponse';
import { User } from '@/entities/user.entity';
import { MoreThan } from 'typeorm';
import { logger } from '@/server';

export class UserService {
  async findAll(): Promise<ServiceResponse<User[] | null>> {
    return ServiceResponse.success<User[]>('Users found', await User.find());
  }

  async findAllWinners(): Promise<ServiceResponse<User[] | null>> {
    return ServiceResponse.success<User[]>('Users found', await User.findBy({ wins: MoreThan(0) }));
  }

  async findById(id: number): Promise<ServiceResponse<User | null>> {
    try {
      const user = await User.findOneByOrFail({ id });

      return ServiceResponse.success<User>('User found', user);
    } catch (ex) {
      const errorMessage = `Error finding user: $${(ex as Error).message}`;
      logger.error(errorMessage);

      return ServiceResponse.failure('User not found', null, StatusCodes.NOT_FOUND);
    }
  }
}

export const userService = new UserService();
