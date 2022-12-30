import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class commentChildComment1669258731443 implements MigrationInterface {
    name = 'commentChildComment1669258731443';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'comment_child_comments',
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
                        name: 'comment_id',
                        type: 'int',
                        unsigned: true,
                        isNullable: false
                    },
                    {
                        name: 'comment_child_id',
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
            'comment_child_comments',
            new TableForeignKey({
                columnNames: ['comment_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'comments',
                onDelete: 'CASCADE'
            })
        );

        await queryRunner.createForeignKey(
            'comment_child_comments',
            new TableForeignKey({
                columnNames: ['comment_child_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'comments',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable('comment_child_comments');

        const foreignKeyCommentId = table.foreignKeys.find((fk) => fk.columnNames.indexOf('comment_id') !== -1);
        await queryRunner.dropForeignKey('comment_id', foreignKeyCommentId);
        await queryRunner.dropColumn('comment_child_comments', 'comment_id');

        const foreignKeyCommentChildId = table.foreignKeys.find(
            (fk) => fk.columnNames.indexOf('comment_child_id') !== -1
        );
        await queryRunner.dropForeignKey('comment_child_id', foreignKeyCommentChildId);
        await queryRunner.dropColumn('comment_child_comments', 'comment_child_id');

        await queryRunner.dropTable('comment_child_comments');
    }
}
