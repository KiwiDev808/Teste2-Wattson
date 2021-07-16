"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCommentController = void 0;
class DeleteCommentController {
    constructor(deleteCommentUseCase) {
        this.deleteCommentUseCase = deleteCommentUseCase;
    }
    async handle(req, res) {
        const id = req.params.id;
        try {
            const response = await this.deleteCommentUseCase.execute({ id });
            return res.status(204).send(response);
        }
        catch (err) {
            res.status(400).send({ message: err.message });
        }
    }
}
exports.DeleteCommentController = DeleteCommentController;
