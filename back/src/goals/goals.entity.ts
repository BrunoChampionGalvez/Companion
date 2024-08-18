import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'goals'
})
export class Goals {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    startDate: Date

    @Column({type: 'float'})
    hoursStudied: number

    @Column({type: 'float'})
    hoursPerDay: number

    @Column()
    skillName: string

    // Relacion con Users
}