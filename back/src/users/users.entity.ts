import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

    // @Column()
    // completedSkills: string[]

    // @Column()
    // ongoingSkills: string[]

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