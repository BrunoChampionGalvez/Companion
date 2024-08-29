import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'weekly-hours-studied'
})
export class WeeklyHoursStudied {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    averageHoursPerDay: number

    @Column()
    averageHoursPerWeek: number

    @Column()
    averageHoursPerMonth: number

    @Column()
    averageHoursPerYear: number

    @Column()
    totalHoursPerDay: number

    @Column()
    totalHoursPerWeek: number

    @Column()
    totalHoursPerMonth: number
    
    @Column()
    totalHoursPerYear: number

    @Column()
    skillName: string

    @Column()
    skillImageUrl: string
}