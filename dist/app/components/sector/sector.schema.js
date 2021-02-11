"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const definition = {
    //Del BackEnd
    _id: { type: String, required: false },
    name: { type: String, requiered: false },
    number: { type: Number, required: false },
    vitality: { type: Number, required: false },
    crop: { type: String, required: false },
    plantCount: { type: Number, required: false },
    recommendation: { type: String, required: false },
    //count: { type: Object, required: false},
    greenhouseId: { type: String, required: false },
    users: { type: String, required: false },
    createdAt: { type: Date, required: false },
    modifiedAt: { type: Date, required: false },
};
const schema = new mongoose_1.Schema(definition);
exports.default = mongoose_1.model('Sector', schema, 'sector');
