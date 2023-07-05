"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const db = async () => {
    try {
        await mongoose_1.default.connect(process.env.DBURL || "");
        console.log("Database is connected");
    }
    catch (error) {
        console.log(error);
    }
};
exports.db = db;
//# sourceMappingURL=db.js.map