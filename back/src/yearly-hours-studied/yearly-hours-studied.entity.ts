import { MonthlyHoursStudied } from "src/monthly-hours-studied/monthly-hours-studied.entity";
import { Users } from "src/users/users.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'yearly-hours-studied'
})
export class YearlyHoursStudied {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    averageMonthlyHours: number

    @Column()
    skillName: string

    @Column()
    skillImageUrl: string

    @ManyToOne(() => Users, user => user.yearlyHoursStudied)
    user: Users

    @OneToMany(() => MonthlyHoursStudied, monthlyHoursStudied => monthlyHoursStudied.yearlyHoursStudied)
    monthlyHoursStudied: MonthlyHoursStudied[]
}