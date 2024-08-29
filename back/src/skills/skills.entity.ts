import { Quizzes } from "src/quizzes/quizzes.entity";
import { Resources } from "src/resources/resources.entity";
import { Users } from "src/users/users.entity";
import { Column, Entity, JoinColumn, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'skills'
})
export class Skills {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({unique: true})
    name: string

    @Column()
    description: string

    @Column("text", {array: true})
    tips: string[]

    @Column()
    imageUrl: string

    @ManyToMany(() => Users, user=> user.ongoingSkills)
    ongoingUsers: Users[]

    @ManyToMany(() => Users, user => user.completedSkills)
    completedUsers: Users[]

    @OneToOne(() => Quizzes, quiz => quiz.skill)
    quiz: Quizzes

    @OneToMany(()=>Resources, resource => resource.skill)
    @JoinColumn({
        name: 'resources'
    })
    resources: Resources[]

    // @Column()
    // resources: string[]
}