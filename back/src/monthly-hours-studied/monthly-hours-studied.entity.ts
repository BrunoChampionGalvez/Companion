import { Users } from "src/users/users.entity";
import { WeeklyHoursStudied } from "src/weekly-hours-studied/weekly-hours-studied.entity";
import { YearlyHoursStudied } from "src/yearly-hours-studied/yearly-hours-studied.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'monthly-hours-studied'
})
export class MonthlyHoursStudied {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    averageWeeklyHours: number

    @Column()
    skillName: string

    @Column()
    skillImageUrl: string

    @ManyToOne(() => Users, user => user.monthlyHoursStudied)
    user: Users

    @OneToMany(() => WeeklyHoursStudied, weeklyHoursStudied => weeklyHoursStudied.monthlyHoursStudied)
    weeklyHoursStudied: WeeklyHoursStudied[]

    @ManyToOne(() => YearlyHoursStudied, yearlyHoursStudied => yearlyHoursStudied.monthlyHoursStudied)
    yearlyHoursStudied: YearlyHoursStudied
}