import { Users } from "src/users/users.entity";
import { WeeklyHoursStudied } from "src/weekly-hours-studied/weekly-hours-studied.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

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

    @ManyToOne(() => Users, user => user.dailyHoursStudied)
    user: Users

    @ManyToOne(() => WeeklyHoursStudied, weeklyHoursStudied => weeklyHoursStudied.dailyHoursStudied)
    weeklyHoursStudied: WeeklyHoursStudied
}