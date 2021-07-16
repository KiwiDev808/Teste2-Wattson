import { Knex } from 'knex'

const tableName = 'teste2_watson_comments'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(tableName, (table) => {
    table.string('id').primary().notNullable()
    table.string('description').notNullable()
    table.string('audio').notNullable()
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(tableName)
}
