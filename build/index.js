"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var app = (0, express_1.default)();
app.use(express_1.default.json());
//renvoie le header en json sur /ping depuis Get
app.get('/ping', function (req, res) {
    res.json({ header: req.headers });
});
//exeption 404
app.get("*", function (req, res) {
    res.sendStatus(404);
});
//permet de lire sur le port indiqué dans le fichier .env
app.listen(process.env.PING_LISTEN_PORT, function () {
    return console.log("\n      Express is listening at http://localhost:".concat(process.env.PING_LISTEN_PORT));
});
