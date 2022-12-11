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
                        name: 'brand',
                        type: 'varchar'
                    },
                    {
                        name: 'status',
                        type: 'varchar'
                    },
                    {
                        name: 'price',
                        type: 'decimal',
                        precision: 40,
                        scale: 0,
                        isNullable: false,
                        default: 0
                    },
                    {
                        name: 'discount',
                        type: 'int',
                        default: 0
                    },
                    {
                        name: 'describe',
                        type: 'varchar'
                    },
                    {
                        name: 'user_id',
                        type: 'int',
                        unsigned: true,
                        isNullable: false
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
