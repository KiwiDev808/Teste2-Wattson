"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRepository = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const knex_1 = __importDefault(require("knex"));
const database_1 = require("../../../config/database");
dotenv_1.default.config();
class BaseRepository {
    static connection() {
        if (!this.dbConnection) {
            this.dbConnection = knex_1.default({
                client: 'mysql',
                connection: {
                    host: database_1.DB_HOST,
                    user: database_1.DB_USER,
                    password: database_1.DB_PASSWORD,
                    database: database_1.DB_SCHEMA,
                    port: database_1.DB_PORT || 3306,
                    multipleStatements: true,
                },
            });
        }
        return this.dbConnection;
    }
    static async destroy() {
        if (this.dbConnection) {
            await this.dbConnection.destroy();
            this.dbConnection = null;
        }
        return;
    }
}
exports.BaseRepository = BaseRepository;
