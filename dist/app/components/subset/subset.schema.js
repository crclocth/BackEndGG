"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const definition = {
    _id: { type: String, required: false },
    sticker: { type: String, required: false },
    subsetName: { type: String, required: false },
    sectorId: { type: String, required: false },
};
const schema = new mongoose_1.Schema(definition);
exports.default = mongoose_1.model('Subset', schema, 'subset');
