export interface  Product {
    _id: string;
    name: string;
    ratings: number;
    reviews: [];
    price: number;
    status: boolean;
    imagePath: string;
}