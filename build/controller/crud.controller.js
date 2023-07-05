"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTodo = exports.deleteTodo = exports.createATodo = exports.getATodo = exports.getAllTodo = void 0;
const crudModel_1 = __importDefault(require("../model/crudModel"));
const getAllTodo = async (req, res) => {
    try {
        const result = await crudModel_1.default.find();
        res.status(200).json({ count: result.length, result });
    }
    catch (error) {
        console.log(error);
    }
};
exports.getAllTodo = getAllTodo;
const getATodo = async (req, res) => {
    try {
        const result = await crudModel_1.default.findOne({ _id: req.params.id });
        res.status(200).json(result);
    }
    catch (error) {
        console.log(error);
    }
};
exports.getATodo = getATodo;
const createATodo = async (req, res) => {
    const { title, body, isCompleted } = req.body;
    try {
        const newtodo = new crudModel_1.default({
            title: title,
            body: body,
            isCompleted: isCompleted,
        });
        const result = await newtodo.save();
        res.status(200).json(result);
    }
    catch (error) {
        res.status(500).json({
            message: "error.message",
            error,
        });
    }
};
exports.createATodo = createATodo;
const deleteTodo = async (req, res) => {
    const id = req.params.id;
    try {
        await crudModel_1.default.deleteOne({ _id: id });
        res.status(200).json({
            message: "delete successfully",
        });
    }
    catch (error) {
        res.status(500).json({
            message: "error.message",
            error,
        });
    }
};
exports.deleteTodo = deleteTodo;
const updateTodo = async (req, res) => {
    const id = req.params.id;
    const { title, body, isCompleted } = req.body;
    try {
        const newdata = await crudModel_1.default.updateOne({ _id: id }, {
            $set: {
                title,
                body,
                isCompleted,
            },
        }, { new: true });
        res.status(200).json({
            message: "update successfully",
            newdata,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "error.message",
            error,
        });
    }
};
exports.updateTodo = updateTodo;
//# sourceMappingURL=crud.controller.js.map