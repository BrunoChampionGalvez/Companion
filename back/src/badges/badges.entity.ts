import { Users } from "src/users/users.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'badges'
})
export class Badges {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    scoreToGetIt: number

    @ManyToMany(() => Users, user => user.badges)
    users: Users[]
}