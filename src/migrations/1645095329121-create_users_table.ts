import { UserStatus, UserRole } from 'src/shares/enums/user.enum';
import { MigrationInterface, QueryRunner, Table, TableIndex } from 'typeorm';

export class createUsersTable1645095329121 implements MigrationInterface {
    name = 'createUsersTable1645095329121';
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'users',
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
                        name: 'email',
                        type: 'varchar'
                    },
                    {
                        name: 'password',
                        type: 'varchar'
                    },
                    {
                        name: 'status',
                        type: 'varchar',
                        default: `'${UserStatus.ACTIVE}'`,
                        comment: Object.keys(UserStatus).join(',')
                    },
                    {
                        name: 'phone_number',
                        type: 'varchar',
                        isNullable: false,
                        isUnique: true
                    },
                    {
                        name: 'role',
                        type: 'varchar(20)',
                        isNullable: false,
                        default: `'${UserRole.USER}'`,
                        comment: Object.keys(UserRole).join(',')
                    },
                    {
                        name: 'is_online',
                        type: 'boolean',
                        default: false
                    },
                    {
                        name: 'address',
                        type: 'varchar'
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
            }),
            true
        );
        await queryRunner.createIndices('users', [
            new TableIndex({
                columnNames: ['role'],
                isUnique: false,
                name: 'IDX-users-role'
            }),
            new TableIndex({
                columnNames: ['address'],
                isUnique: true,
                name: 'IDX-users-address'
            }),
            new TableIndex({
                columnNames: ['email'],
                isUnique: true,
                name: 'IDX-users-email'
            }),
            new TableIndex({
                columnNames: ['status'],
                isUnique: false,
                name: 'IDX-users-status'
            })
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        if (await queryRunner.hasTable('users')) await queryRunner.dropTable('users');
    }
}
