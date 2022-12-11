import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class media1669258756085 implements MigrationInterface {
    name = 'media1669258756085';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'media',
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
                        name: 'key',
                        type: 'varchar'
                    },
                    {
                        name: 's3_id',
                        type: 'varchar'
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
                        name: 'comment_id',
                        type: 'int',
                        unsigned: true,
                        isNullable: false
                    },
                    {
                        name: 'chat_id',
                        type: 'int',
                        unsigned: true,
                        isNullable: false
                    },
                    {
                        name: 'tent_type_id ',
                        type: 'int',
                        unsigned: true,
                        isNullable: false
                    },
                    {
                        name: 'text',
                        type: 'varchar',
                        isNullable: false
                    }
                ]
            })
        );

        await queryRunner.createForeignKey(
            'media',
            new TableForeignKey({
                columnNames: ['comment_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'comments',
                onDelete: 'CASCADE'
            })
        );

        await queryRunner.createForeignKey(
            'media',
            new TableForeignKey({
                columnNames: ['chat_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'chats',
                onDelete: 'CASCADE'
            })
        );

        await queryRunner.createForeignKey(
            'media',
            new TableForeignKey({
                columnNames: ['tent_type_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'tentTypes',
                onDelete: 'CASCADE'
            })
        );

        await queryRunner.createForeignKey(
            'media',
            new TableForeignKey({
                columnNames: ['user_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'users',
                onDelete: 'CASCADE'
            })
        );

        await queryRunner.createForeignKey(
            'media',
            new TableForeignKey({
                columnNames: ['post_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'posts',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable('media');

        // Drop FK user_id
        const foreignKeyUserId = table.foreignKeys.find((fk) => fk.columnNames.indexOf('user_id') !== -1);
        await queryRunner.dropForeignKey('user_id', foreignKeyUserId);
        await queryRunner.dropColumn('media', 'user_id');

        // Drop FK post_id
        const foreignKeyPostId = table.foreignKeys.find((fk) => fk.columnNames.indexOf('post_id') !== -1);
        await queryRunner.dropForeignKey('post_id', foreignKeyPostId);
        await queryRunner.dropColumn('media', 'post_id');

        // Drop FK comment_id
        const foreignKeyCommentId = table.foreignKeys.find((fk) => fk.columnNames.indexOf('comment_id') !== -1);
        await queryRunner.dropForeignKey('comment_id', foreignKeyCommentId);
        await queryRunner.dropColumn('media', 'comment_id');

        // Drop FK chat_id
        const foreignKeyChatId = table.foreignKeys.find((fk) => fk.columnNames.indexOf('chat_id') !== -1);
        await queryRunner.dropForeignKey('chat_id', foreignKeyChatId);
        await queryRunner.dropColumn('media', 'chat_id');

        // Drop FK tent_type_id
        const foreignKeyTent_Type_Id = table.foreignKeys.find((fk) => fk.columnNames.indexOf('tent_type_id') !== -1);
        await queryRunner.dropForeignKey('tent_type_id', foreignKeyTent_Type_Id);
        await queryRunner.dropColumn('media', 'tent_type_id');

        await queryRunner.dropTable('media');
    }
}
