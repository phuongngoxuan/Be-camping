import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class media1669258756085 implements MigrationInterface {
    name = 'media1669258756085';

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

    public async down(queryRunner: QueryRunner): Promise<void> {}
}
