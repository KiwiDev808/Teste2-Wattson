"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB_PORT = exports.DB_USER = exports.DB_SCHEMA = exports.DB_PASSWORD = exports.DB_HOST = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const DB_HOST = String(process.env.DB_HOST);
exports.DB_HOST = DB_HOST;
const DB_USER = String(process.env.DB_USER);
exports.DB_USER = DB_USER;
const DB_PASSWORD = String(process.env.DB_PASSWORD);
exports.DB_PASSWORD = DB_PASSWORD;
const DB_SCHEMA = String(process.env.DB_SCHEMA);
exports.DB_SCHEMA = DB_SCHEMA;
const DB_PORT = Number(process.env.DB_PORT);
exports.DB_PORT = DB_PORT;
