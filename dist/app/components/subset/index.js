"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const subset_network_1 = __importDefault(require("./subset.network"));
const subset = express_1.default();
subset.use('/subset', subset_network_1.default);
exports.default = subset;
