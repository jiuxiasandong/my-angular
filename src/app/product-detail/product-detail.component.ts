import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductService, Product, Comment } from '../shared/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  private id: number;
  private product: Product;
  private comments: Comment[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit() {
    // this.activatedRoute.params.subscribe((params: Params) => {
    //   this.title = params.title;
    // })
    this.id = this.activatedRoute.snapshot.params.id;
    this.product = this.productService.getProductById(this.id);
    this.comments = this.productService.getCommentForProductById(this.id);
  }
  goback() {
    window.history.go(-1);
    // this.router.navigate(['home'])
  }
}
