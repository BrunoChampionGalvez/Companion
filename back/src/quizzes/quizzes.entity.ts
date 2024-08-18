import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'quizzes'
})
export class Quizzes {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    question
}