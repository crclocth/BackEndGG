"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sector_repository_1 = __importDefault(require("./sector.repository"));
function getSector() {
    return sector_repository_1.default.getSector();
}
function getSectorById(id) {
    return sector_repository_1.default.getSectorById(id);
}
function patchSector(id, sector) {
    return sector_repository_1.default.patchSector(id, sector);
}
function deleteSector(id) {
    return sector_repository_1.default.deleteSector(id);
}
function addSector(sector) {
    return sector_repository_1.default.addSector(sector);
}
exports.default = { addSector, getSector, getSectorById, patchSector, deleteSector };
