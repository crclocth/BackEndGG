"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const subset_schema_1 = __importDefault(require("./subset.schema"));
function getSubset() {
    return __awaiter(this, void 0, void 0, function* () {
        return subset_schema_1.default.find(); //mostrar todo
    });
}
function getSubsetById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return subset_schema_1.default.findOne({ _id: id });
    });
}
function getAllSetSubsets(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return subset_schema_1.default.find({ _id: id });
    });
}
function addSubset(user) {
    return __awaiter(this, void 0, void 0, function* () {
        return subset_schema_1.default.create(user);
    });
}
function deleteSubset(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return subset_schema_1.default.remove({ _id: id });
    });
}
function patchSubset(_id, user) {
    return __awaiter(this, void 0, void 0, function* () {
        return subset_schema_1.default.findByIdAndUpdate(_id, user);
    });
}
exports.default = { addSubset, getSubset, getSubsetById, deleteSubset, patchSubset, getAllSetSubsets };
