import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm"

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
}