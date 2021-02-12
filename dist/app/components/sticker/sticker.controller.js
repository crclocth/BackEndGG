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
    return sticker_repository_1.default.addSticker(sticker);
}
exports.default = { addSticker, getSticker, getStickerById, patchSticker, deleteSticker };
