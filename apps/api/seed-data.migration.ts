import { QueryRunner } from "typeorm";
import { MigrationInterface } from "typeorm";

export class SeedDataMigration1710433714100 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // ------------------------------------------------------------------------------------------------
        // Seed data for issue statuses
        // ------------------------------------------------------------------------------------------------
        await queryRunner.query(`INSERT INTO issue_statuses (name, description, \`group\`) VALUES ('Open', 'Open issue status', 'OPEN')`);
        await queryRunner.query(`INSERT INTO issue_statuses (name, description, \`group\`) VALUES ('In Progress', 'In progress issue status', 'IN_PROGRESS')`);
        await queryRunner.query(`INSERT INTO issue_statuses (name, description, \`group\`) VALUES ('Closed', 'Closed issue status', 'CLOSED')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // ------------------------------------------------------------------------------------------------
        // Delete data for issue statuses
        // ------------------------------------------------------------------------------------------------
        await queryRunner.query(`DELETE FROM issue_statuses WHERE name = 'Open'`);
        await queryRunner.query(`DELETE FROM issue_statuses WHERE name = 'In Progress'`);
        await queryRunner.query(`DELETE FROM issue_statuses WHERE name = 'Closed'`);
    }
}