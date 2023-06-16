import {Router} from 'express';
const router = Router();

import multer from '../libs/multer';
import { createPhoto, getProducts } from '../controllers/product.controller';

router.route('/product')
    .get(getProducts)
    .post(multer.single('image'), createPhoto)

export default router;
