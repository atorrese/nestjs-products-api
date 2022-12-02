import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Product } from "./interfaces/product.interface";
import { CreateProductDTO } from './dto/productdto';

@Injectable()
export class ProductService {

    constructor(@InjectModel('Product') private readonly productModel: Model<Product>){}

    async getProducts(): Promise<Product[]>{
        const products = await this.productModel.find()
        return products;
    }

    async getProduct(productID: string): Promise<Product>{
        const product = await this.productModel.findById(productID);
        return product;
    }

    async createProduct(createproductDTO:CreateProductDTO):Promise<Product>{
        const product =  new this.productModel(createproductDTO);
        return await product.save();
    }

    async deleteProduct(productID: string): Promise<Product>{
        const deleteProduct =  await this.productModel.findByIdAndDelete(productID);
        return deleteProduct;
    }

    async updateProduct(productID: string, createproductDTO: CreateProductDTO): Promise<Product>{
        const updateProduct =  await this.productModel.findByIdAndUpdate(productID, createproductDTO, {new: true});
        return updateProduct;
    }
}
