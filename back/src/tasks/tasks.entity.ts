import { Users } from "src/users/users.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'tasks'
})
export class Tasks {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    totalHours: number

    @Column()
    streak: number

    @ManyToOne(() => Users, user => user.tasks)
    user: Users

    //Relación N:1 con Skills
}