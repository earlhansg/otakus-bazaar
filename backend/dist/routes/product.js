"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const multer_1 = __importDefault(require("../libs/multer"));
const product_controller_1 = require("../controllers/product.controller");
router.route('/product')
    .get(product_controller_1.getProducts)
    .post(multer_1.default.single('image'), product_controller_1.createPhoto);
exports.default = router;
