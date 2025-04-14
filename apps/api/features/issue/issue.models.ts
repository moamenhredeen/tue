import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Base } from "../../core/base.models";

export type IssueStatusGroup = 'OPEN' | 'IN_PROGRESS' | 'CLOSED';

@Entity({name: "issue_statuses"})
export class IssueStatus {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    name: string;

    @Column()
    description: string;

    @Column()
    group: IssueStatusGroup;
}

@Entity({name: "issues"})
export class Issue extends Base {
    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    status_id: number;
    
    @ManyToOne(() => IssueStatus, (status) => status.id)
    @JoinColumn({ name: "status_id" })
    status: IssueStatus;
}