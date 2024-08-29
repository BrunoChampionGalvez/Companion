import { Skills } from "src/skills/skills.entity";
import { Users } from "src/users/users.entity";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'resources'
})
export class Resources {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @Column()
    description: string

    @Column({nullable: true})
    url: string

    @Column("text", {array: true})
    images: string[]

    @ManyToMany(() => Users, user => user.resources)
    users: Users[]

    @ManyToOne(() => Skills, skill => skill.resources)
    skill: Skills
}