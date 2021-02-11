"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const subset_repository_1 = __importDefault(require("./subset.repository"));
function getSubset() {
    return subset_repository_1.default.getSubset();
}
function getSubsetById(id) {
    return subset_repository_1.default.getSubsetById(id);
}
function patchSubset(id, subset) {
    return subset_repository_1.default.patchSubset(id, subset);
}
function deleteSubset(id) {
    return subset_repository_1.default.deleteSubset(id);
}
function addSubset(subset) {
    var _a, _b, _c, _d;
    subset._id = (_a = subset._id) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    subset.sticker = (_b = subset.sticker) === null || _b === void 0 ? void 0 : _b.toLowerCase();
    subset.subsetName = (_c = subset.subsetName) === null || _c === void 0 ? void 0 : _c.toLowerCase();
    subset.sectorId = (_d = subset.sectorId) === null || _d === void 0 ? void 0 : _d.toLowerCase();
    return subset_repository_1.default.addSubset(subset);
}
exports.default = { addSubset, getSubset, getSubsetById, patchSubset, deleteSubset };
