"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const CreateComment_1 = require("./useCases/CreateComment");
const DeleteComment_1 = require("./useCases/DeleteComment");
const GetComments_1 = require("./useCases/GetComments");
const app = express_1.default();
exports.app = app;
app.use(express_1.default.json());
app.use(cors_1.default());
app.use(express_1.default.static('build'));
app.use('/static', express_1.default.static(process.cwd() + '/static'));
app.get('/api', (req, res) => {
    return res.send({ message: 'Teste' });
});
app.get('/api/comment', (req, res) => {
    return GetComments_1.getCommentsController.handle(req, res);
});
app.post('/api/comment', (req, res) => {
    return CreateComment_1.createCommentController.handle(req, res);
});
app.delete('/api/comment/:id', (req, res) => {
    return DeleteComment_1.deleteCommentController.handle(req, res);
});
