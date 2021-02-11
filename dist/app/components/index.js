"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sector_1 = __importDefault(require("./sector"));
const index_1 = __importDefault(require("./sticker/index"));
const index_2 = __importDefault(require("./subset/index"));
const components = [
    index_1.default, index_2.default, sector_1.default
];
exports.default = components;
