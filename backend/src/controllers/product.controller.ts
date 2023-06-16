import { Request, Response } from 'express';
import { Product } from '../models/product';
import path from 'path';
import fs from 'fs-extra';

export async function getProducts(req: Request, res: Response): Promise<Response> {
    return res.json("successfully get request");
};

export async function createPhoto(req: Request, res: Response): Promise<Response> {
    const { name, ratings, reviews, price, status} = req.body;
    const newPhoto = {name, ratings, reviews, price, status, imagePath: req.file?.path};
    const product = new Product(newPhoto);
    await product.save();

    return res.json({
        message: "Product successfuly saved",
        product
    })
};