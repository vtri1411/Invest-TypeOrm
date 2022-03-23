const config = {
	type: 'postgres',
	host: process.env.DB_HOST,
	port: +process.env.DB_PORT,
	username: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_DATABASE,
	synchronize: true,
	dropSchema: true,
	entities: ['**/*.entity.js'],
	// migrationsRun: false,
	logging: false,
	// migrations: ['dist/migrations/*.js'],
	// cli: {
	// 	migrationsDir: 'migrations',
	// },
}

module.exports = config
