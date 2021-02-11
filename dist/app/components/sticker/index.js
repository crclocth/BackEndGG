"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sticker_network_1 = __importDefault(require("./sticker.network"));
const sticker = express_1.default();
sticker.use('/sticker', sticker_network_1.default);
exports.default = sticker;
