import { Badges } from "src/badges/badges.entity";
import { DailyHoursStudied } from "src/daily-hours-studied/daily-hours-studied.entity";
import { Meetings } from "src/meetings/meetings.entity";
import { MonthlyHoursStudied } from "src/monthly-hours-studied/monthly-hours-studied.entity";
import { Resources } from "src/resources/resources.entity";
import { Skills } from "src/skills/skills.entity";
import { Tasks } from "src/tasks/tasks.entity";
import { WeeklyHoursStudied } from "src/weekly-hours-studied/weekly-hours-studied.entity";
import { YearlyHoursStudied } from "src/yearly-hours-studied/yearly-hours-studied.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'users'
})
export class Users {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column({unique: true})
    email: string

    @Column({unique: true})
    username: string

    @Column()
    password: string

    @Column()
    description: string

    @Column()
    country: string

    @Column()
    city: string

    @Column()
    birthDate: Date

    @Column()
    score: number

    @OneToMany(() => Tasks, task => task.user)
    @JoinColumn({name: 'tasks'})
    tasks: Tasks[]

    @ManyToMany(() => Skills, skill => skill.completedUsers)
    @JoinTable({
        name: 'user_completed_skills', // Name of the join table
        joinColumn: {
            name: 'user_id', // Column name for the User entity
            referencedColumnName: 'id' // Primary key of the User entity
        },
        inverseJoinColumn: {
            name: 'skill_id', // Column name for the Skill entity
            referencedColumnName: 'id' // Primary key of the Skill entity
        }
    })
    completedSkills: Skills[]

    @ManyToMany(() => Skills, skill => skill.ongoingUsers)
    @JoinTable({
        name: 'user_ongoing_skills',
        joinColumn: {
            name: 'user_id',
            referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'skill_id',
            referencedColumnName: 'id'
        }
    })
    ongoingSkills: Skills[]

    @ManyToMany(() => Resources, resource => resource.users)
    @JoinTable({
        name: 'users_resources',
        joinColumn: {
            name: 'user_id',
            referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'resource_id',
            referencedColumnName: 'id'
        }
    })
    resources: Resources[]

    @ManyToMany(() => Meetings, meeting => meeting.users)
    @JoinTable({
        name: 'users_meetings',
        joinColumn: {
            name: 'user_id',
            referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'meeting_id',
            referencedColumnName: 'id'
        }
    })
    meetings: Meetings[]

    @ManyToMany(() => Badges, badge => badge.users)
    @JoinTable({
        name: 'users_badges',
        joinColumn: {
            name: 'user_id',
            referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'badge_id',
            referencedColumnName: 'id'
        }
    })
    badges: Badges[]

    @ManyToMany(() => Users, user => user.currentPartners)
    @JoinTable({
        name: 'users_users',
        joinColumn: {
            name: 'user_id',
            referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'user_id',
            referencedColumnName: 'id'
        }
    })
    currentPartners: Users[]

    @OneToMany(() => DailyHoursStudied, dailyHoursStudied => dailyHoursStudied.user)
    @JoinColumn({
        name: 'daily_hours_studied'
    })
    dailyHoursStudied: DailyHoursStudied[]

    @OneToMany(() => WeeklyHoursStudied, weeklyHoursStudied => weeklyHoursStudied.user)
    @JoinColumn({
        name: 'weekly_hours_studied'
    })
    weeklyHoursStudied: WeeklyHoursStudied[]

    @OneToMany(() => MonthlyHoursStudied, monthlyHoursStudied => monthlyHoursStudied.user)
    @JoinColumn({
        name: 'monthly_hours_studied'
    })
    monthlyHoursStudied: MonthlyHoursStudied[]

    @OneToMany(() => YearlyHoursStudied, yearlyHoursStudied => yearlyHoursStudied.user)
    @JoinColumn({
        name: 'yearly_hours_studied'
    })
    yearlyHoursStudied: YearlyHoursStudied[]
        
    @Column({type: 'enum', enum: ['superAdmin', 'user'], default: 'user'})
    role: string

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    createdAt: Date

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP'})
    updatedAt: Date

    @Column({type: 'enum', enum: ['active', 'inactive', 'suspended'], default: 'active'})
    status: string

    @Column({nullable: true})
    profilePicture: string

    @Column({type: 'timestamp', nullable: true})
    lastLogin: Date

    @Column({nullable: true})
    resetPasswordToken: string

    @Column({type: 'timestamp', nullable: true})
    resetPasswordExpires: Date

}