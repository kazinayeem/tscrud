"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const todoSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        require: true,
    },
    body: {
        type: String,
        require: true,
    },
    isCompleted: {
        type: Boolean,
        require: true,
    },
}, { timestamps: true });
const todoModel = mongoose_1.default.model("todo", todoSchema);
exports.default = todoModel;
//# sourceMappingURL=crudModel.js.map