"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCommentUseCase = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const Comment_1 = require("../../Entities/Comment");
class CreateCommentUseCase {
    constructor(commentsRepository, textSynthesizer, idGenerator) {
        this.commentsRepository = commentsRepository;
        this.textSynthesizer = textSynthesizer;
        this.idGenerator = idGenerator;
    }
    async execute(data) {
        const audioBuffer = await this.textSynthesizer.synthesize(data.description);
        const commentId = this.idGenerator.generate();
        const fileName = `${Date.now()}-${commentId}.wav`;
        fs_1.default.writeFileSync(path_1.default.join(process.cwd(), '/static/') + fileName, audioBuffer);
        const comment = new Comment_1.Comment({
            audio: `${data.baseUrl}/static/${fileName}`,
            description: data.description,
            filename: fileName,
        }, commentId);
        await this.commentsRepository.save(comment);
        return { message: 'Success' };
    }
}
exports.CreateCommentUseCase = CreateCommentUseCase;
