import { Questions } from "src/questions/questions.entity";
import { Skills } from "src/skills/skills.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'quizzes'
})
export class Quizzes {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @OneToOne(() => Skills, skill => skill.quiz)
    @JoinColumn({
        name: 'skills'
    })
    skill: Skills
    
    @OneToMany(() => Questions, question => question.quiz)
    @JoinColumn({
        name: 'questions'
    })
    questions: Questions[]
}