import { ProductSchema } from './schemas/product.shema';
import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    MongooseModule.forFeature([
      {name:'Product', schema:ProductSchema}
    ])
    ],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
