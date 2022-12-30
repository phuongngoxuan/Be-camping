import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class advantages1669258806335 implements MigrationInterface {
    name = 'advantages1669258806335'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'advantages',
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
                        type: 'varchar'
                    },
                    {
                        name: 'table_id',
                        type: 'int',
                        unsigned: true,
                        isNullable: false
                    },
                    {
                        name: 'chair_id',
                        type: 'int',
                        unsigned: true,
                        isNullable: false
                    },
                    {
                        name: 'coal_stove_id ',
                        type: 'int',
                        unsigned: true,
                        isNullable: false
                    },
                    {
                        name: 'tent_id',
                        type: 'int',
                        unsigned: true,
                        isNullable: false
                    },
                    {
                        name: 'increase_tent_id',
                        type: 'int',
                        unsigned: true,
                        isNullable: false
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
            'advantages',
            new TableForeignKey({
                columnNames: ['table_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'tables',
                onDelete: 'CASCADE'
            })
        );

        await queryRunner.createForeignKey(
            'advantages',
            new TableForeignKey({
                columnNames: ['chair_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'chairs',
                onDelete: 'CASCADE'
            })
        );

        await queryRunner.createForeignKey(
            'advantages',
            new TableForeignKey({
                columnNames: ['coal_stove_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'coal_stoves',
                onDelete: 'CASCADE'
            })
        );

        await queryRunner.createForeignKey(
            'advantages',
            new TableForeignKey({
                columnNames: ['tent_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'tents',
                onDelete: 'CASCADE'
            })
        );

        await queryRunner.createForeignKey(
            'advantages',
            new TableForeignKey({
                columnNames: ['increase_tent_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'increase_tents',
                onDelete: 'CASCADE'
            })
        );

    }



    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable('advantages');

        // Drop FK table_id
        const foreignKeyTableId = table.foreignKeys.find((fk) => fk.columnNames.indexOf('table_id') !== -1);
        await queryRunner.dropForeignKey('table_id', foreignKeyTableId);
        await queryRunner.dropColumn('advantages', 'table_id');

        // Drop FK chair_id
        const foreignKeyChairId = table.foreignKeys.find((fk) => fk.columnNames.indexOf('chair_id') !== -1);
        await queryRunner.dropForeignKey('chair_id', foreignKeyChairId);
        await queryRunner.dropColumn('advantages', 'chair_id');

        // Drop FK coal_stove_id
        const foreignKeyCoalStoveId = table.foreignKeys.find((fk) => fk.columnNames.indexOf('coal_stove_id') !== -1);
        await queryRunner.dropForeignKey('coal_stove_id', foreignKeyCoalStoveId);
        await queryRunner.dropColumn('advantages', 'coal_stove_id');

        // Drop FK tent_id
        const foreignKeyTentId = table.foreignKeys.find((fk) => fk.columnNames.indexOf('tent_id') !== -1);
        await queryRunner.dropForeignKey('tent_id', foreignKeyTentId);
        await queryRunner.dropColumn('advantages', 'tent_id');

        // Drop FK increase_tent_id
        const foreignKeyIncreaseTentId = table.foreignKeys.find((fk) => fk.columnNames.indexOf('increase_tent_id') !== -1);
        await queryRunner.dropForeignKey('increase_tent_id', foreignKeyIncreaseTentId);
        await queryRunner.dropColumn('advantages', 'increase_tent_id');

        await queryRunner.dropTable('advantages');
    }

}
