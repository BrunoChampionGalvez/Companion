import { Users } from "src/users/users.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'meetings'
})
export class Meetings {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({type: 'timestamp'})
    start: Date

    @Column({type: 'timestamp'})
    end: Date

    @ManyToMany(() => Users, user => user.meetings)
    users: Users[]
}