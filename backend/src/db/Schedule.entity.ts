//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Schedule')
export class ScheduleEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('date', { nullable: true })
  Date: Date;

  @Column('date', { nullable: true })
  StartTime: Date;

  @Column('date', { nullable: true })
  EndTime: Date;

  @Column('text', { nullable: true })
  Description: string;
}
