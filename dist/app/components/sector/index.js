"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sector_network_1 = __importDefault(require("./sector.network"));
const sector = express_1.default();
sector.use('/sector', sector_network_1.default);
exports.default = sector;
