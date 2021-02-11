"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sticker_repository_1 = __importDefault(require("./sticker.repository"));
function getSticker() {
    return sticker_repository_1.default.getSticker();
}
function getStickerById(id) {
    return sticker_repository_1.default.getStickerById(id);
}
function patchSticker(id, sticker) {
    return sticker_repository_1.default.patchSticker(id, sticker);
}
function deleteSticker(id) {
    return sticker_repository_1.default.deleteSticker(id);
}
function addSticker(sticker) {
    var _a, _b;
    sticker._idSector = (_a = sticker._idSector) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    sticker.sticker = (_b = sticker.sticker) === null || _b === void 0 ? void 0 : _b.toLowerCase();
    return sticker_repository_1.default.addSticker(sticker);
}
exports.default = { addSticker, getSticker, getStickerById, patchSticker, deleteSticker };
