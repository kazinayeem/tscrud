"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.error = void 0;
const error = (msg, status) => {
    const e = new Error();
    e.message = msg;
    e.status = status;
    return e;
};
exports.error = error;
//# sourceMappingURL=customerror.js.map