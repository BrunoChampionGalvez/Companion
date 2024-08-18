import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'hours-studied'
})
export class HoursStudied {
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
    skillName: string

    @Column()
    skillImageUrl: string
}