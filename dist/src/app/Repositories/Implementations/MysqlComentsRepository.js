"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MysqlCommentsRepository = void 0;
const BaseRepository_1 = require("./BaseRepository");
class MysqlCommentsRepository extends BaseRepository_1.BaseRepository {
    constructor() {
        super();
        this.connection = BaseRepository_1.BaseRepository.connection();
        this.commentsTable = () => this.connection('test2_watson_comments');
    }
    async getAll() {
        const result = await this.commentsTable();
        return result;
    }
    async findById(id) {
        const result = await this.commentsTable().where({ id });
        return result[0];
    }
    async save(comment) {
        await this.commentsTable().insert(comment);
    }
    async delete(id) {
        await this.commentsTable().delete().where({
            id,
        });
    }
}
exports.MysqlCommentsRepository = MysqlCommentsRepository;
