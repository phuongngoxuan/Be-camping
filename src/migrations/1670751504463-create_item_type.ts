import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class createItemType1670751504463 implements MigrationInterface {
    name = 'createItemType1670751504463';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'item_types',
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
                        name: 'color',
                        type: 'varchar'
                    },
                    {
                        name: 'total',
                        type: 'int'
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
                        name: 'coal_stove_id',
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
            'item_types',
            new TableForeignKey({
                columnNames: ['table_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'tables',
                onDelete: 'CASCADE'
            })
        );

        await queryRunner.createForeignKey(
            'item_types',
            new TableForeignKey({
                columnNames: ['chair_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'chairs',
                onDelete: 'CASCADE'
            })
        );

        await queryRunner.createForeignKey(
            'item_types',
            new TableForeignKey({
                columnNames: ['coal_stove_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'coalStoves',
                onDelete: 'CASCADE'
            })
        );

        await queryRunner.createForeignKey(
            'item_types',
            new TableForeignKey({
                columnNames: ['tent_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'tents',
                onDelete: 'CASCADE'
            })
        );

        await queryRunner.createForeignKey(
            'item_types',
            new TableForeignKey({
                columnNames: ['increase_tent_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'increaseTents',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable('item_types');

        // Drop FK table_id
        const foreignKeyUserId = table.foreignKeys.find((fk) => fk.columnNames.indexOf('table_id') !== -1);
        await queryRunner.dropForeignKey('table_id', foreignKeyUserId);
        await queryRunner.dropColumn('item_types', 'table_id');

        // Drop FK chair_id
        const foreignKeyPostId = table.foreignKeys.find((fk) => fk.columnNames.indexOf('chair_id') !== -1);
        await queryRunner.dropForeignKey('chair_id', foreignKeyPostId);
        await queryRunner.dropColumn('item_types', 'chair_id');

        // Drop FK coal_stove_id
        const foreignKeyCommentId = table.foreignKeys.find((fk) => fk.columnNames.indexOf('coal_stove_id') !== -1);
        await queryRunner.dropForeignKey('coal_stove_id', foreignKeyCommentId);
        await queryRunner.dropColumn('item_types', 'coal_stove_id');

        // Drop FK tent_id
        const foreignKeyChatId = table.foreignKeys.find((fk) => fk.columnNames.indexOf('tent_id') !== -1);
        await queryRunner.dropForeignKey('tent_id', foreignKeyChatId);
        await queryRunner.dropColumn('item_types', 'tent_id');

        // Drop FK increase_tent_id
        const foreignKeyTent_Type_Id = table.foreignKeys.find(
            (fk) => fk.columnNames.indexOf('increase_tent_id') !== -1
        );
        await queryRunner.dropForeignKey('increase_tent_id', foreignKeyTent_Type_Id);
        await queryRunner.dropColumn('item_types', 'increase_tent_id');

        await queryRunner.dropTable('item_types');
    }
}
