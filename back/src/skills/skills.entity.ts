import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'skills'
})
export class Skills {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({unique: true})
    name: string

    @Column()
    description: string

    @Column()
    tips: string[]

    @Column()
    imageUrl: string

    // @Column()
    // resources: string[]
}