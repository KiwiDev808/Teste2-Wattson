"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCommentController = void 0;
class CreateCommentController {
    constructor(CreateCommentUseCase) {
        this.CreateCommentUseCase = CreateCommentUseCase;
    }
    async handle(req, res) {
        const { description } = req.body;
        const baseUrl = `${req.protocol}://${req.get('host')}`;
        try {
            const response = await this.CreateCommentUseCase.execute({
                description,
                baseUrl,
            });
            return res.status(201).send(response);
        }
        catch (err) {
            res.status(400).send({ message: err.message });
        }
    }
}
exports.CreateCommentController = CreateCommentController;
