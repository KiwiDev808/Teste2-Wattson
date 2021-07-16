"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCommentUseCase = void 0;
const fs_1 = __importDefault(require("fs"));
class DeleteCommentUseCase {
    constructor(commentsRepository) {
        this.commentsRepository = commentsRepository;
    }
    async execute(data) {
        const dbComment = await this.commentsRepository.findById(data.id);
        if (!dbComment) {
            throw new Error('Comment not found');
        }
        fs_1.default.unlinkSync(`${process.cwd()}/static/${dbComment.filename}`);
        await this.commentsRepository.delete(dbComment.id);
        return { message: 'Success' };
    }
}
exports.DeleteCommentUseCase = DeleteCommentUseCase;
