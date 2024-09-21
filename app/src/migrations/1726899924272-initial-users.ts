import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialUsers1726899924272 implements MigrationInterface {
  name = 'InitialUsers1726899924272';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`firstName\` varchar(255) NOT NULL, \`lastName\` varchar(255) NOT NULL, \`wins\` int NOT NULL DEFAULT '0', \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB;`,
    );

    await queryRunner.query(`INSERT INTO \`users\` (firstName, lastName) VALUES ('Maria', 'Ivanova')`);
    await queryRunner.query(`INSERT INTO \`users\` (firstName, lastName) VALUES ('Elena', 'Petrova')`);
    await queryRunner.query(`INSERT INTO \`users\` (firstName, lastName) VALUES ('Anna', 'Georgieva')`);
    await queryRunner.query(`INSERT INTO \`users\` (firstName, lastName) VALUES ('Sofia', 'Dimitrova')`);
    await queryRunner.query(`INSERT INTO \`users\` (firstName, lastName) VALUES ('Anastasia', 'Kirova')`);
    await queryRunner.query(`INSERT INTO \`users\` (firstName, lastName) VALUES ('Alexandra', 'Stoyanova')`);
    await queryRunner.query(`INSERT INTO \`users\` (firstName, lastName) VALUES ('Victoria', 'Popova')`);
    await queryRunner.query(`INSERT INTO \`users\` (firstName, lastName) VALUES ('Kristina', 'Todorova')`);
    await queryRunner.query(`INSERT INTO \`users\` (firstName, lastName) VALUES ('Gabriela', 'Vasileva')`);
    await queryRunner.query(`INSERT INTO \`users\` (firstName, lastName) VALUES ('Ivana', 'Ivanova')`);
    await queryRunner.query(`INSERT INTO \`users\` (firstName, lastName) VALUES ('Maya', 'Petrova')`);
    await queryRunner.query(`INSERT INTO \`users\` (firstName, lastName) VALUES ('Tanya', 'Georgieva')`);
    await queryRunner.query(`INSERT INTO \`users\` (firstName, lastName) VALUES ('Kalina', 'Dimitrova')`);
    await queryRunner.query(`INSERT INTO \`users\` (firstName, lastName) VALUES ('Georgi', 'Ivanov')`);
    await queryRunner.query(`INSERT INTO \`users\` (firstName, lastName) VALUES ('Ivan', 'Georgiev')`);
    await queryRunner.query(`INSERT INTO \`users\` (firstName, lastName) VALUES ('Dimitar', 'Dimitrov')`);
    await queryRunner.query(`INSERT INTO \`users\` (firstName, lastName) VALUES ('Nikolay', 'Kirov')`);
    await queryRunner.query(`INSERT INTO \`users\` (firstName, lastName) VALUES ('Stefan', 'Stoyanov')`);
    await queryRunner.query(`INSERT INTO \`users\` (firstName, lastName) VALUES ('Petar', 'Popov')`);
    await queryRunner.query(`INSERT INTO \`users\` (firstName, lastName) VALUES ('Alexander', 'Petrov')`);
    await queryRunner.query(`INSERT INTO \`users\` (firstName, lastName) VALUES ('Martin', 'Ivanov')`);
    await queryRunner.query(`INSERT INTO \`users\` (firstName, lastName) VALUES ('Hristo', 'Georgiev')`);
    await queryRunner.query(`INSERT INTO \`users\` (firstName, lastName) VALUES ('Daniel', 'Dimitrov')`);
    await queryRunner.query(`INSERT INTO \`users\` (firstName, lastName) VALUES ('Kaloyan', 'Kirov')`);
    await queryRunner.query(`INSERT INTO \`users\` (firstName, lastName) VALUES ('Boris', 'Stoyanov')`);
    await queryRunner.query(`INSERT INTO \`users\` (firstName, lastName) VALUES ('Emil', 'Popov')`);
    await queryRunner.query(`INSERT INTO \`users\` (firstName, lastName) VALUES ('Vasil', 'Petrov')`);
    await queryRunner.query(`INSERT INTO \`users\` (firstName, lastName) VALUES ('Radoslav', 'Ivanov')`);
    await queryRunner.query(`INSERT INTO \`users\` (firstName, lastName) VALUES ('Todor', 'Georgiev')`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`users\``);
  }
}
