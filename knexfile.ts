import dotenv from 'dotenv'
dotenv.config()

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_SCHEMA,
      port: process.env.DB_PORT || 3306,
      multipleStatements: true,
    },
    migrations: {
      tableName: 'knex_test2_watson_lucas_bacelar',
      directory: `${__dirname}/src/database/migrations`,
    },
  },

  production: {
    client: 'mysql',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_SCHEMA,
      port: process.env.DB_PORT || 3306,
      multipleStatements: true,
    },
  },
}
