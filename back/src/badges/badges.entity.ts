import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}