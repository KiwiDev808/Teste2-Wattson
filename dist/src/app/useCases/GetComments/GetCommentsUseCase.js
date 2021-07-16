"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCommentsUseCase = void 0;
class GetCommentsUseCase {
    constructor(commentsRepository) {
        this.commentsRepository = commentsRepository;
    }
    async execute() {
        const comments = await this.commentsRepository.getAll();
        return { message: 'Success', comments };
    }
}
exports.GetCommentsUseCase = GetCommentsUseCase;
