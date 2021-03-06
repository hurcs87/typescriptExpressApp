"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.get('/example', (req, res) => {
    res.render('example');
});
app.listen(5000, () => {
    console.log('Hello from the server side!');
});
