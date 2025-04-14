import { PrimaryGeneratedColumn, Column } from "typeorm";

/**
 * Base model for all entities
 */
export class Base {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;
}