"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
const tableName = 'test2_watson_comments';
async function up(knex) {
    return knex.schema.createTable(tableName, (table) => {
        table.string('id').primary().notNullable();
        table.string('description').notNullable();
        table.string('audio').notNullable();
        table.string('filename').notNullable();
    });
}
exports.up = up;
async function down(knex) {
    return knex.schema.dropTable(tableName);
}
exports.down = down;
