import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateParticipantsTable1620856435238 implements MigrationInterface {
    name = 'CreateParticipantsTable1620856435238'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `participants` DROP FOREIGN KEY `FK_71697092296CD8AE`");
        await queryRunner.query("ALTER TABLE `participants` DROP FOREIGN KEY `FK_716970923EB8070A`");
        await queryRunner.query("ALTER TABLE `participants` DROP FOREIGN KEY `FK_716970925FB14BA7`");
        await queryRunner.query("ALTER TABLE `participants` DROP FOREIGN KEY `FK_71697092727ACA70`");
        await queryRunner.query("ALTER TABLE `participants` DROP FOREIGN KEY `FK_716970928BAC62AF`");
        await queryRunner.query("ALTER TABLE `participants` DROP FOREIGN KEY `FK_7169709298260155`");
        await queryRunner.query("ALTER TABLE `participants` DROP FOREIGN KEY `FK_71697092A76ED395`");
        await queryRunner.query("ALTER TABLE `participants` DROP FOREIGN KEY `FK_71697092DD842E46`");
        await queryRunner.query("ALTER TABLE `participants` DROP FOREIGN KEY `FK_71697092F0155CBA`");
        await queryRunner.query("DROP INDEX `IDX_71697092296CD8AE` ON `participants`");
        await queryRunner.query("DROP INDEX `IDX_716970923EB8070A` ON `participants`");
        await queryRunner.query("DROP INDEX `IDX_716970925FB14BA7` ON `participants`");
        await queryRunner.query("DROP INDEX `IDX_71697092727ACA70` ON `participants`");
        await queryRunner.query("DROP INDEX `IDX_716970928BAC62AF` ON `participants`");
        await queryRunner.query("DROP INDEX `IDX_7169709298260155` ON `participants`");
        await queryRunner.query("DROP INDEX `IDX_71697092A76ED395` ON `participants`");
        await queryRunner.query("DROP INDEX `IDX_71697092DD842E46` ON `participants`");
        await queryRunner.query("DROP INDEX `IDX_71697092F0155CBA` ON `participants`");
        await queryRunner.query("ALTER TABLE `participants` DROP COLUMN `participant_group_id`");
        await queryRunner.query("ALTER TABLE `participants` DROP COLUMN `city_id`");
        await queryRunner.query("ALTER TABLE `participants` DROP COLUMN `region_id`");
        await queryRunner.query("ALTER TABLE `participants` DROP COLUMN `position_id`");
        await queryRunner.query("ALTER TABLE `participants` DROP COLUMN `parent_id`");
        await queryRunner.query("ALTER TABLE `participants` DROP COLUMN `user_id`");
        await queryRunner.query("ALTER TABLE `participants` DROP COLUMN `document`");
        await queryRunner.query("ALTER TABLE `participants` DROP COLUMN `is_cedula`");
        await queryRunner.query("ALTER TABLE `participants` DROP COLUMN `gender`");
        await queryRunner.query("ALTER TABLE `participants` DROP COLUMN `mobile`");
        await queryRunner.query("ALTER TABLE `participants` DROP COLUMN `birth_date`");
        await queryRunner.query("ALTER TABLE `participants` DROP COLUMN `points`");
        await queryRunner.query("ALTER TABLE `participants` DROP COLUMN `redeemed_points`");
        await queryRunner.query("ALTER TABLE `participants` DROP COLUMN `status`");
        await queryRunner.query("ALTER TABLE `participants` DROP COLUMN `entry_date`");
        await queryRunner.query("ALTER TABLE `participants` DROP COLUMN `address`");
        await queryRunner.query("ALTER TABLE `participants` DROP COLUMN `created_at`");
        await queryRunner.query("ALTER TABLE `participants` DROP COLUMN `updated_at`");
        await queryRunner.query("ALTER TABLE `participants` DROP COLUMN `level_id`");
        await queryRunner.query("ALTER TABLE `participants` DROP COLUMN `team_id`");
        await queryRunner.query("ALTER TABLE `participants` DROP COLUMN `accept_terms_and_conditions`");
        await queryRunner.query("ALTER TABLE `participants` DROP COLUMN `image_name`");
        await queryRunner.query("ALTER TABLE `participants` DROP COLUMN `mobile_os`");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `participants` ADD `mobile_os` varchar(20) CHARACTER SET \"utf8\" COLLATE \"utf8_unicode_ci\" NULL");
        await queryRunner.query("ALTER TABLE `participants` ADD `image_name` varchar(255) CHARACTER SET \"utf8\" COLLATE \"utf8_unicode_ci\" NULL");
        await queryRunner.query("ALTER TABLE `participants` ADD `accept_terms_and_conditions` tinyint(1) NOT NULL DEFAULT '0'");
        await queryRunner.query("ALTER TABLE `participants` ADD `team_id` int NULL");
        await queryRunner.query("ALTER TABLE `participants` ADD `level_id` int NULL");
        await queryRunner.query("ALTER TABLE `participants` ADD `updated_at` datetime NULL");
        await queryRunner.query("ALTER TABLE `participants` ADD `created_at` datetime NULL");
        await queryRunner.query("ALTER TABLE `participants` ADD `address` varchar(255) CHARACTER SET \"utf8\" COLLATE \"utf8_unicode_ci\" NULL");
        await queryRunner.query("ALTER TABLE `participants` ADD `entry_date` date NULL");
        await queryRunner.query("ALTER TABLE `participants` ADD `status` varchar(10) CHARACTER SET \"utf8\" COLLATE \"utf8_unicode_ci\" NOT NULL");
        await queryRunner.query("ALTER TABLE `participants` ADD `redeemed_points` decimal NULL");
        await queryRunner.query("ALTER TABLE `participants` ADD `points` decimal NULL");
        await queryRunner.query("ALTER TABLE `participants` ADD `birth_date` date NULL");
        await queryRunner.query("ALTER TABLE `participants` ADD `mobile` varchar(15) CHARACTER SET \"utf8\" COLLATE \"utf8_unicode_ci\" NULL");
        await queryRunner.query("ALTER TABLE `participants` ADD `gender` varchar(10) CHARACTER SET \"utf8\" COLLATE \"utf8_unicode_ci\" NULL");
        await queryRunner.query("ALTER TABLE `participants` ADD `is_cedula` tinyint(1) NULL");
        await queryRunner.query("ALTER TABLE `participants` ADD `document` varchar(13) CHARACTER SET \"utf8\" COLLATE \"utf8_unicode_ci\" NOT NULL");
        await queryRunner.query("ALTER TABLE `participants` ADD `user_id` int NULL");
        await queryRunner.query("ALTER TABLE `participants` ADD `parent_id` int NULL");
        await queryRunner.query("ALTER TABLE `participants` ADD `position_id` int NOT NULL");
        await queryRunner.query("ALTER TABLE `participants` ADD `region_id` int NULL");
        await queryRunner.query("ALTER TABLE `participants` ADD `city_id` int NULL");
        await queryRunner.query("ALTER TABLE `participants` ADD `participant_group_id` int NULL");
        await queryRunner.query("CREATE INDEX `IDX_71697092F0155CBA` ON `participants` (`participant_group_id`)");
        await queryRunner.query("CREATE INDEX `IDX_71697092DD842E46` ON `participants` (`position_id`)");
        await queryRunner.query("CREATE INDEX `IDX_71697092A76ED395` ON `participants` (`user_id`)");
        await queryRunner.query("CREATE INDEX `IDX_7169709298260155` ON `participants` (`region_id`)");
        await queryRunner.query("CREATE INDEX `IDX_716970928BAC62AF` ON `participants` (`city_id`)");
        await queryRunner.query("CREATE INDEX `IDX_71697092727ACA70` ON `participants` (`parent_id`)");
        await queryRunner.query("CREATE INDEX `IDX_716970925FB14BA7` ON `participants` (`level_id`)");
        await queryRunner.query("CREATE INDEX `IDX_716970923EB8070A` ON `participants` (`program_id`)");
        await queryRunner.query("CREATE INDEX `IDX_71697092296CD8AE` ON `participants` (`team_id`)");
        await queryRunner.query("ALTER TABLE `participants` ADD CONSTRAINT `FK_71697092F0155CBA` FOREIGN KEY (`participant_group_id`) REFERENCES `participant_groups`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `participants` ADD CONSTRAINT `FK_71697092DD842E46` FOREIGN KEY (`position_id`) REFERENCES `positions`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `participants` ADD CONSTRAINT `FK_71697092A76ED395` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `participants` ADD CONSTRAINT `FK_7169709298260155` FOREIGN KEY (`region_id`) REFERENCES `regions`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `participants` ADD CONSTRAINT `FK_716970928BAC62AF` FOREIGN KEY (`city_id`) REFERENCES `cities`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `participants` ADD CONSTRAINT `FK_71697092727ACA70` FOREIGN KEY (`parent_id`) REFERENCES `participants`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `participants` ADD CONSTRAINT `FK_716970925FB14BA7` FOREIGN KEY (`level_id`) REFERENCES `levels`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `participants` ADD CONSTRAINT `FK_716970923EB8070A` FOREIGN KEY (`program_id`) REFERENCES `programs`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `participants` ADD CONSTRAINT `FK_71697092296CD8AE` FOREIGN KEY (`team_id`) REFERENCES `teams`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

}
