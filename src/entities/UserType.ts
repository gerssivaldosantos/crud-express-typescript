import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity("user_type")
export class UserType {
    @PrimaryColumn("id")
    id: string

    @Column("name")
    name: string

    @Column("description")
    description: string

    @CreateDateColumn("created_at")
    createdAt: Date

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }

    }
}