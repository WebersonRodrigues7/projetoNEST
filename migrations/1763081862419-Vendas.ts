import { MigrationInterface, QueryRunner } from "typeorm";

export class Vendas1763081862419 implements MigrationInterface {
    name = 'Vendas1763081862419'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`vendas\` (\`id\` int NOT NULL AUTO_INCREMENT, \`notafiscal\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`vendas\``);
    }

}
