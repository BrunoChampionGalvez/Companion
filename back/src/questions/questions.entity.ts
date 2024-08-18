import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}