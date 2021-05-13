import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateBuildersTable1620865797156 implements MigrationInterface {
    name = 'CreateBuildersTable1620865797156'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `builder` (`id` int NOT NULL AUTO_INCREMENT, `participantId` int NOT NULL, `identification` varchar(13) NOT NULL, `names` varchar(100) NOT NULL, `lastNames` varchar(100) NOT NULL, `phoneNumber` varchar(10) NOT NULL, `email` varchar(100) NOT NULL, `citieId` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `builder`");
    }

}
