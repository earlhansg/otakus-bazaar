"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const ProductSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    ratings: {
        type: Number,
    },
    reviews: {
        type: Array,
    },
    price: {
        type: Number,
        required: true,
    },
    status: {
        type: Boolean,
        required: true,
    },
    imagePath: {
        type: String
    },
    image: {
        data: Buffer,
        contentType: String
    }
});
const Product = (0, mongoose_1.model)("Product", ProductSchema);
exports.Product = Product;
