import knex from 'knex'
import { knexConfig } from '../../src/config/database'
knexConfig

export async function truncate(tableName: string) {
  const connection = knex(knexConfig)
  connection(tableName).truncate()
}
