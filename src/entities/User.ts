import {Entity, Column, CreateDateColumn, PrimaryColumn, ManyToOne, JoinColumn} from "typeorm"
import {UserType} from "./UserType"
import {v4 as uuid} from 'uuid';

@Entity("user")
export class User {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    user_type_id: string;

    @ManyToOne(()=> UserType)
    @JoinColumn({name:"user_type_id"})
    category: UserType;

    @CreateDateColumn()
    created_at: Date
}