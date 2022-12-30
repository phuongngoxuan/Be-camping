import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class comments1669258714865 implements MigrationInterface {
    name = 'comments1669258714865';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'comments',
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
                        name: 'user_id',
                        type: 'int',
                        unsigned: true,
                        isNullable: false
                    },
                    {
                        name: 'post_id',
                        type: 'int',
                        unsigned: true,
                        isNullable: false
                    },
                    {
                        name: 'text',
                        type: 'varchar',
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
            'comments',
            new TableForeignKey({
                columnNames: ['user_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'users',
                onDelete: 'CASCADE'
            })
        );

        await queryRunner.createForeignKey(
            'comments',
            new TableForeignKey({
                columnNames: ['post_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'posts',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable('comments');

        const foreignKeyUserId = table.foreignKeys.find((fk) => fk.columnNames.indexOf('user_id') !== -1);
        await queryRunner.dropForeignKey('user_id', foreignKeyUserId);
        await queryRunner.dropColumn('comments', 'user_id');

        const foreignKeyPostId = table.foreignKeys.find((fk) => fk.columnNames.indexOf('post_id') !== -1);
        await queryRunner.dropForeignKey('post_id', foreignKeyPostId);
        await queryRunner.dropColumn('comments', 'post_id');

        await queryRunner.dropTable('comments');
    }
}
