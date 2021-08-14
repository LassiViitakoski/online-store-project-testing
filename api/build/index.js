"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const AppRouter_1 = require("./AppRouter");
require("./controllers/TestController");
const app = express_1.default();
app.use(express_1.default.urlencoded({ extended: true }));
app.use(AppRouter_1.AppRouter.getInstance());
app.use(cors_1.default());
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Listening on port : ${PORT}`);
});
