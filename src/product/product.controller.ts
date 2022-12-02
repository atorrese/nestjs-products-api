import { CreateProductDTO } from './dto/productdto';
import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';
import { ProductService } from "./product.service";

@Controller('product')
export class ProductController {

    constructor(private productService: ProductService){}

    @Post('/create')
    async createPost(@Res() res, @Body() createProductDTO: CreateProductDTO){
        const product = await this.productService.createProduct(createProductDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Product Created Successfully',
            product
        });
    }

    @Get('/')
    async getProducts(@Res() res){
        const products = await this.productService.getProducts();
        return res.status(HttpStatus.OK).json({
            products
        });
    }

    @Get('/:productID')
    async getProduct(@Res() res, @Param('productID') productID: string){
        const product = await this.productService.getProduct(productID);
        if (!product) throw new NotFoundException('Product Does not exists');
        return res.status(HttpStatus.OK).json({
            product
        });
    }

    @Delete('/delete')
    async deleteProduct(@Res() res, @Query('productID') productID){
        const product = await this.productService.deleteProduct(productID);
        if (!product) throw new NotFoundException('Product Does not exists');
        return res.status(HttpStatus.OK).json({
            message: 'Product Deleted Successfully',
            product
        });
    }

    @Put('/update')
    async updatePost(@Res() res, @Query('productID') productID, @Body() createProductDTO: CreateProductDTO){
        const product = await this.productService.updateProduct(productID, createProductDTO);
        if (!product) throw new NotFoundException('Product Does not exists');
        return res.status(HttpStatus.OK).json({
            message: 'Product Updated Successfully',
            product
        });
    }


}
