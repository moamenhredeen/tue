import { MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey } from "typeorm";

export class IssueMigrations1710433714000 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        
        await queryRunner.createTable(new Table({
            name: "issue_statuses",
            columns: [
                new TableColumn({
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment",
                }),
                new TableColumn({
                    name: "name",
                    type: "varchar",
                    isUnique: true,
                }),
                new TableColumn({
                    name: "description",
                    type: "text",
                }),
                new TableColumn({
                    name: "group",
                    type: "enum",
                    enum: ["OPEN", "IN_PROGRESS", "CLOSED"],
                }),
            ],
        }));

        await queryRunner.createTable(new Table({
            name: "issues",
            columns: [
                new TableColumn({
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment",
                }),
                new TableColumn({
                    name: "title",
                    type: "varchar",
                }),
                new TableColumn({
                    name: "description",
                    type: "text",
                }),
                new TableColumn({
                    name: "status_id",
                    type: "int",
                }),
                new TableColumn({
                    name: "created_at",
                    type: "timestamp",
                    default: "CURRENT_TIMESTAMP",
                }),
                new TableColumn({
                    name: "updated_at",
                    type: "timestamp",
                    default: "CURRENT_TIMESTAMP",
                }),
            ],
        }));

        await queryRunner.createForeignKey("issues", new TableForeignKey({
            name: "fk_issues_status_id",
            columnNames: ["status_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "issue_statuses",
            onDelete: "CASCADE",
        }));
        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("issues", "fk_issues_status_id");
        await queryRunner.dropTable("issues");
        await queryRunner.dropTable("issue_statuses");
    }
}