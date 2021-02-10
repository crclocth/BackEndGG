"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const noticias_network_1 = __importDefault(require("./noticias.network"));
const noticias = express_1.default();
noticias.use('/noticias', noticias_network_1.default);
exports.default = noticias;
