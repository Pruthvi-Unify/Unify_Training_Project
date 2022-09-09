import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable:true})
    name: string;
    
    @Column({ nullable:true})
    lastName: string;

    @Column({ nullable:true})
    password: string;
}
