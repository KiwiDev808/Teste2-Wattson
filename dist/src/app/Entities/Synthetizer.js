"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.textSynthesizer = exports.Synthesizer = void 0;
const TextToSpeechV1 = __importStar(require("ibm-watson/text-to-speech/v1"));
const textToSpeech_1 = require("../../config/textToSpeech");
const textToSpeech = new TextToSpeechV1.default(textToSpeech_1.credentials);
class Synthesizer {
    constructor(textToSpeech) {
        this.textToSpeech = textToSpeech;
    }
    async synthesize(text) {
        const synthesizeParams = {
            text: text,
            accept: 'audio/wav',
            voice: 'pt-BR_IsabelaV3Voice',
        };
        return this.textToSpeech
            .synthesize(synthesizeParams)
            .then((response) => {
            return this.textToSpeech.repairWavHeaderStream(response.result);
        });
    }
}
exports.Synthesizer = Synthesizer;
exports.textSynthesizer = new Synthesizer(textToSpeech);
