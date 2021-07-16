"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCommentsController = exports.getCommentsUseCase = void 0;
const MysqlComentsRepository_1 = require("../../Repositories/Implementations/MysqlComentsRepository");
const GetCommentsController_1 = require("./GetCommentsController");
const GetCommentsUseCase_1 = require("./GetCommentsUseCase");
const mysqlCommentsRepository = new MysqlComentsRepository_1.MysqlCommentsRepository();
const getCommentsUseCase = new GetCommentsUseCase_1.GetCommentsUseCase(mysqlCommentsRepository);
exports.getCommentsUseCase = getCommentsUseCase;
const getCommentsController = new GetCommentsController_1.GetCommentsController(getCommentsUseCase);
exports.getCommentsController = getCommentsController;