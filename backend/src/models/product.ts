import { Document, Schema, Model, model } from "mongoose";

interface IReview {
  userId: number;
  comment: string;
}

interface IProduct extends Document {
  name: string;
  ratings?: number;
  reviews?: IReview[];
  price: number;
  status: boolean;
  imagePath: string;
  image:  { 
    data: Buffer; 
    contentType: string;
 }
}

const ProductSchema: Schema<IProduct> = new Schema<IProduct>({
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
  image:  { 
    data: Buffer, 
    contentType: String 
 }
});

const Product: Model<IProduct> = model<IProduct>("Product", ProductSchema);

export { Product, IProduct };
