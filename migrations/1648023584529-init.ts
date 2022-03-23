import {MigrationInterface, QueryRunner} from "typeorm";

export class init1648023584529 implements MigrationInterface {
    name = 'init1648023584529'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "profile" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "userId" integer, CONSTRAINT "REL_a24972ebd73b106250713dcddd" UNIQUE ("userId"), CONSTRAINT "PK_3dd8bfc97e4a77c70971591bdcb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "task" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "userId" integer NOT NULL, CONSTRAINT "PK_fb213f79ee45060ba925ecd576e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "department" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_9a2213262c1593bffb581e382f5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "department_users_user" ("departmentId" integer NOT NULL, "userId" integer NOT NULL, CONSTRAINT "PK_68cdf6a6176691de6f780798bbc" PRIMARY KEY ("departmentId", "userId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_970d4efc2e5ca66700c27d43d6" ON "department_users_user" ("departmentId") `);
        await queryRunner.query(`CREATE INDEX "IDX_3a52d2ac1dc3a9812f6301b4b5" ON "department_users_user" ("userId") `);
        await queryRunner.query(`ALTER TABLE "profile" ADD CONSTRAINT "FK_a24972ebd73b106250713dcddd9" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "task" ADD CONSTRAINT "FK_f316d3fe53497d4d8a2957db8b9" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "department_users_user" ADD CONSTRAINT "FK_970d4efc2e5ca66700c27d43d62" FOREIGN KEY ("departmentId") REFERENCES "department"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "department_users_user" ADD CONSTRAINT "FK_3a52d2ac1dc3a9812f6301b4b5c" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "department_users_user" DROP CONSTRAINT "FK_3a52d2ac1dc3a9812f6301b4b5c"`);
        await queryRunner.query(`ALTER TABLE "department_users_user" DROP CONSTRAINT "FK_970d4efc2e5ca66700c27d43d62"`);
        await queryRunner.query(`ALTER TABLE "task" DROP CONSTRAINT "FK_f316d3fe53497d4d8a2957db8b9"`);
        await queryRunner.query(`ALTER TABLE "profile" DROP CONSTRAINT "FK_a24972ebd73b106250713dcddd9"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_3a52d2ac1dc3a9812f6301b4b5"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_970d4efc2e5ca66700c27d43d6"`);
        await queryRunner.query(`DROP TABLE "department_users_user"`);
        await queryRunner.query(`DROP TABLE "department"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "task"`);
        await queryRunner.query(`DROP TABLE "profile"`);
    }

}
