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
const encuesta3_schema_1 = __importDefault(require("./encuesta3.schema"));
function getEncuesta3() {
    return __awaiter(this, void 0, void 0, function* () {
        return encuesta3_schema_1.default.find(); //mostrar todo
    });
}
function getEncuesta3ById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return encuesta3_schema_1.default.findOne({ _id: id });
    });
}
function addEncuesta3(user) {
    return __awaiter(this, void 0, void 0, function* () {
        return encuesta3_schema_1.default.create(user);
    });
}
function deleteEncuesta3(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return encuesta3_schema_1.default.remove({ _id: id });
    });
}
function patchEncuesta3(_id, user) {
    return __awaiter(this, void 0, void 0, function* () {
        return encuesta3_schema_1.default.findByIdAndUpdate(_id, user);
    });
}
exports.default = { addEncuesta3, getEncuesta3, getEncuesta3ById, deleteEncuesta3, patchEncuesta3 };
