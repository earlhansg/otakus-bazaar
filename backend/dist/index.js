"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const port = 8000;
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.send("Hello from express + typescript");
});
// mongodb connection
mongoose_1.default.connect('mongodb://0.0.0.0:27017/test-todo')
    .then(result => app.listen(port, () => console.log(`connected to database and app running on port ${port}`)))
    // .then(result => console.log('connected to db'))
    .catch(err => console.log(err));
// app.listen(port, () => {
//     console.log(`now listening on port ${port}`);
// })
