import dotenv from 'dotenv'

dotenv.config()

const DB_HOST = String(process.env.DB_HOST)
const DB_USER = String(process.env.DB_USER)
const DB_PASSWORD = String(process.env.DB_PASSWORD)
const DB_SCHEMA = String(process.env.DB_SCHEMA)
const DB_PORT = Number(process.env.DB_PORT)

const knexConfig = {
  client: 'mysql',
  connection: {
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_SCHEMA,
    port: DB_PORT || 3306,
    multipleStatements: true,
  },
}

export { DB_HOST, DB_PASSWORD, DB_SCHEMA, DB_USER, DB_PORT, knexConfig }
