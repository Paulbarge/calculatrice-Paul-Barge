import {BaseEntity, Column, Entity, PrimaryGeneratedColumn, CreateDateColumn} from 'typeorm';

@Entity('timer')
export class Timer extends BaseEntity{
    @PrimaryGeneratedColumn()
    id : string;
    @Column()
    timeTakenMS : number;
    @CreateDateColumn()
    created_at: Date;
}
