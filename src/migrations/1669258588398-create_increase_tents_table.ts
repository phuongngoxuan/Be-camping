import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class createIncreaseTentsTable1669258588398 implements MigrationInterface {
    name = 'createIncreaseTentsTable1669258588398';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'increase_tents',
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

        await queryRunner.createForeignKey(
            'increase_tents',
            new TableForeignKey({
                columnNames: ['user_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'users',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable('increase_tents');

        // Drop FK user_id
        const foreignKeyUserId = table.foreignKeys.find((fk) => fk.columnNames.indexOf('user_id') !== -1);
        await queryRunner.dropForeignKey('user_id', foreignKeyUserId);
        await queryRunner.dropColumn('increase_tents', 'user_id');

        await queryRunner.dropTable('increase_tents');
    }
}
