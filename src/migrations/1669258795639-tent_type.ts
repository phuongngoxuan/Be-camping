import {MigrationInterface, QueryRunner} from "typeorm";

export class tentType1669258795639 implements MigrationInterface {
    name = 'tentType1669258795639'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`email\` varchar(255) NOT NULL, \`address\` varchar(255) NOT NULL, \`role\` varchar(255) NOT NULL, \`status\` varchar(255) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`histories\` (\`id\` int NOT NULL AUTO_INCREMENT, \`from\` varchar(255) NOT NULL, \`to\` varchar(255) NOT NULL, \`tx_hash\` varchar(255) NOT NULL, \`block_number\` int NOT NULL, \`log_index\` int NOT NULL, \`action\` varchar(255) NOT NULL, \`block_timestamp\` int NOT NULL, \`pool_id\` int NOT NULL, \`data\` json NOT NULL, \`user_id\` int NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user_info\` (\`id\` int NOT NULL AUTO_INCREMENT, \`user_id\` int NOT NULL, \`is_banned\` tinyint NOT NULL, \`balance\` int NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`histories\` ADD CONSTRAINT \`FK_a5c0f522c47fcafbe1250c43add\` FOREIGN KEY (\`user_id\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`histories\` DROP FOREIGN KEY \`FK_a5c0f522c47fcafbe1250c43add\``);
        await queryRunner.query(`DROP TABLE \`user_info\``);
        await queryRunner.query(`DROP TABLE \`histories\``);
        await queryRunner.query(`DROP TABLE \`users\``);
    }

}
