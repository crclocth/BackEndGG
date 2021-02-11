"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const definition = {
    _idSector: { type: String, required: false },
    sticker: { type: String, required: false },
    contador: { type: Number, required: false },
};
const schema = new mongoose_1.Schema(definition);
exports.default = mongoose_1.model('Sticker', schema, 'sticker');
