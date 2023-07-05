"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultRoute = void 0;
const express_1 = require("express");
const crud_controller_1 = require("../controller/crud.controller");
exports.defaultRoute = (0, express_1.Router)();
exports.defaultRoute.get("/", crud_controller_1.getAllTodo);
exports.defaultRoute.get("/:id", crud_controller_1.getATodo);
exports.defaultRoute.post("/", crud_controller_1.createATodo);
exports.defaultRoute.delete("/:id", crud_controller_1.deleteTodo);
exports.defaultRoute.put("/:id", crud_controller_1.updateTodo);
//# sourceMappingURL=routes.js.map