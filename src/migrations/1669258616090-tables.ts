import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class tables1669258616090 implements MigrationInterface {
    name = 'tables1669258616090';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'tables',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                        unsigned: true
                    },
                    {
                        name: 'text',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'user_id',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'view',
                        type: 'varchar',
                        isNullable: true
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE IF EXISTS tables`);
    }
}
