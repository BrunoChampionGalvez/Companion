import { Quizzes } from "src/quizzes/quizzes.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'questions'
})
export class Questions {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    question: string

    @Column("text", {array: true})
    answers: string[]

    @Column()
    correctAnswer: number

    @ManyToOne(() => Quizzes, quiz => quiz.questions)
    quiz: Quizzes
}