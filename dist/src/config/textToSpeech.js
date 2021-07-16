"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.credentials = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const auth_1 = require("ibm-watson/auth");
dotenv_1.default.config();
exports.credentials = {
    authenticator: new auth_1.IamAuthenticator({
        apikey: String(process.env.API_KEY),
    }),
    serviceUrl: String(process.env.SERVICE_URL),
};
