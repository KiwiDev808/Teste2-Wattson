"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCommentsController = void 0;
class GetCommentsController {
    constructor(getCommentsUseCase) {
        this.getCommentsUseCase = getCommentsUseCase;
    }
    async handle(req, res) {
        try {
            const response = await this.getCommentsUseCase.execute();
            return res.status(201).send(response);
        }
        catch (err) {
            res.status(400).send({ message: err.message });
        }
    }
}
exports.GetCommentsController = GetCommentsController;
