import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'meetings'
})
export class Meetings {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({type: 'timestamp'})
    start: Date

    @Column({type: 'timestamp'})
    end: Date
}