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
function getAllSetSubsets(id) {
    return subset_repository_1.default.getAllSetSubsets(id);
}
function patchSubset(id, subset) {
    return subset_repository_1.default.patchSubset(id, subset);
}
function deleteSubset(id) {
    return subset_repository_1.default.deleteSubset(id);
}
function addSubset(subset) {
    return subset_repository_1.default.addSubset(subset);
}
exports.default = { addSubset, getSubset, getSubsetById, patchSubset, deleteSubset, getAllSetSubsets };
