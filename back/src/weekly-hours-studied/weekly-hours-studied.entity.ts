import { DailyHoursStudied } from "src/daily-hours-studied/daily-hours-studied.entity";
import { MonthlyHoursStudied } from "src/monthly-hours-studied/monthly-hours-studied.entity";
import { Users } from "src/users/users.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'weekly-hours-studied'
})
export class WeeklyHoursStudied {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    averageDailyHours: number
    
    @Column()
    totalHours: number

    @Column()
    skillName: string

    @Column()
    skillImageUrl: string

    @ManyToOne(() => Users, user => user.weeklyHoursStudied)
    user: Users

    @OneToMany(() => DailyHoursStudied, dailyHoursStudied => dailyHoursStudied.weeklyHoursStudied)
    @JoinColumn({
        name: 'daily_hours_studied'
    })
    dailyHoursStudied: DailyHoursStudied[]

    @ManyToOne(() => MonthlyHoursStudied, monthlyHoursStudied => monthlyHoursStudied.weeklyHoursStudied)
    monthlyHoursStudied: MonthlyHoursStudied
}