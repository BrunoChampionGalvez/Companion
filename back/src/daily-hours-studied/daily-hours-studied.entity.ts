import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'daily-hours-studied'
})
export class DailyHoursStudied {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    date: number

    @Column()
    week: number

    @Column()
    month: number

    @Column()
    year: number

    @Column({type: 'float'})
    totalHours: number

    @Column()
    skillName: string

    @Column()
    skillImageUrl: string
}