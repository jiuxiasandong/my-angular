import { ProductService } from './../shared/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private url: string = "http://placehold.it/320x150";
  // private text:boolean=true;
  public products: Array<Product>;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.products.push(new Product(9, "第九个商品", 38, "一般般", 4, ["零食", "酸辣"]))
  }
}
