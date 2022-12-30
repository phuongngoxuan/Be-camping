import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class product1669258823826 implements MigrationInterface {
    name = 'product1669258823826';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'products',
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
                        name: 'name',
                        type: 'varchar'
                    },
                    {
                        name: 'star',
                        type: 'varchar'
                    },
                    {
                        name: 'amount_sold',
                        type: 'int'
                    },
                    {
                        name: 'total_value ',
                        type: 'decimal',
                        precision: 40,
                        scale: 0,
                        isNullable: false,
                        default: 0
                    },
                    {
                        name: 'created_at',
                        type: 'datetime',
                        default: 'CURRENT_TIMESTAMP'
                    },
                    {
                        name: 'updated_at',
                        type: 'datetime',
                        default: 'CURRENT_TIMESTAMP'
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        if (await queryRunner.hasTable('products')) await queryRunner.dropTable('products');
    }
}
