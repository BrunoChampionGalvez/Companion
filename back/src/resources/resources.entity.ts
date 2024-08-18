import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'resources'
})
export class Resources {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @Column()
    description: string

    @Column({nullable: true})
    url: string

    @Column()
    images: string[]
}