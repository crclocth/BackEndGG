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
    var _a, _b, _c, _d, _e;
    sector._id = (_a = sector._id) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    sector.name = (_b = sector.name) === null || _b === void 0 ? void 0 : _b.toLowerCase();
    sector.crop = (_c = sector.crop) === null || _c === void 0 ? void 0 : _c.toLowerCase();
    sector.recommendation = (_d = sector.recommendation) === null || _d === void 0 ? void 0 : _d.toLowerCase();
    sector.greenhouseId = (_e = sector.greenhouseId) === null || _e === void 0 ? void 0 : _e.toLowerCase();
    return sector_repository_1.default.addSector(sector);
}
exports.default = { addSector, getSector, getSectorById, patchSector, deleteSector };
