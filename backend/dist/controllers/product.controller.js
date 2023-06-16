"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPhoto = exports.getProducts = void 0;
const product_1 = require("../models/product");
function getProducts(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        return res.json("successfully get request");
    });
}
exports.getProducts = getProducts;
;
function createPhoto(req, res) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const { name, ratings, reviews, price, status } = req.body;
        const newPhoto = { name, ratings, reviews, price, status, imagePath: (_a = req.file) === null || _a === void 0 ? void 0 : _a.path };
        const product = new product_1.Product(newPhoto);
        yield product.save();
        return res.json({
            message: "Product successfuly saved",
            product
        });
    });
}
exports.createPhoto = createPhoto;
;
