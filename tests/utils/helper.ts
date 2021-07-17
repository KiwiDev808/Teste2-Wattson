import knex from 'knex'
import { Comment } from '../../src/app/Entities/Comment'
import { knexConfig } from '../../src/config/database'
knexConfig

export async function insertInTable(
  tableName: string,
  data: any
): Promise<void> {
  const connection = knex(knexConfig)
  await connection(tableName).insert(data)
}

export async function truncate(tableName: string): Promise<void> {
  const connection = knex(knexConfig)
  await connection.raw(`TRUNCATE TABLE ${tableName}`)
}

export async function getAll(tableName: string): Promise<Comment[]> {
  const connection = knex(knexConfig)
  return await connection(tableName)
}
