import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, BaseEntity } from 'typeorm';
import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi';
import { z } from 'zod';
import { commonValidations } from '@/common/utils/commonValidation';
extendZodWithOpenApi(z);

export const UserSchema = z.object({
  id: z.number().optional(),
  firstName: z.string(),
  lastName: z.string(),
  wins: z.number().optional().default(0),
  createdAt: z.date().optional(),
});

export const GetUserSchema = z.object({
  params: z.object({ id: commonValidations.id }),
});

@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  firstName: string;

  @Column({ type: 'varchar' })
  lastName: string;

  @Column({ type: 'int', default: 0 })
  wins: number;

  @CreateDateColumn()
  createdAt: Date;
}
