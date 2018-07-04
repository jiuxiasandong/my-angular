import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  private products: Product[] = [
    new Product(1, "第一个商品", 198, "真的好吃", 1, ["零食", "酸辣"]),
    new Product(2, "第二个商品", 108, "垃圾", 2, ["水果", "酸辣"]),
    new Product(3, "第三个商品", 138, "完美", 3, ["零食", "酸辣"]),
    new Product(4, "第四个商品", 98, "太好吃了", 5, ["零食", "酸辣"]),
    new Product(5, "第五个商品", 58, "还可以吧", 4, ["零食", "酸辣"]),
    new Product(6, "第六个商品", 108, "送我都不吃", 3, ["零食", "酸辣"]),
    new Product(7, "第七个商品", 18, "爽歪歪", 2, ["零食", "酸辣"]),
    new Product(8, "第八个商品", 8, "好吃到不能自拔", 1, ["零食", "酸辣"])
  ]

  private comments: Comment[] = [
    new Comment(345, 1, "赵云", new Date(), 3, "味道还不错"),
    new Comment(653, 5, "周瑜", new Date(), 4, "味道真不错"),
    new Comment(976, 7, "黄忠", new Date(), 4, "味道确实不错"),
    new Comment(934, 2, "关羽", new Date(), 5, "味道太棒了"),
    new Comment(988, 3, "曹操", new Date(), 3, "味道还不错"),
    new Comment(325, 8, "刘备", new Date(), 3, "味道还不错"),
    new Comment(7653, 2, "孙权", new Date(), 3, "味道还不错"),
    new Comment(824, 4, "许褚", new Date(), 3, "味道还不错"),
    new Comment(843, 8, "张飞", new Date(), 3, "味道还不错"),
    new Comment(854, 1, "诸葛亮", new Date(), 3, "味道还不错"),
    new Comment(2545, 6, "马超", new Date(), 3, "味道还不错"),
    new Comment(4654, 6, "孙策", new Date(), 3, "味道还不错")
  ]
  constructor() { }
  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product {
    return this.products.find(item => item.id == id);
  }


  getCommentForProductById(id: number): Comment[] {
    return this.comments.filter((comment: Comment) => comment.id == id);
  }

}

export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public desc: string,
    public rating: number,
    public categories: Array<string>
  ) { }
}

export class Comment {
  constructor(
    public userId: number,
    public id: number,
    public userName: string,
    public timestamp: Date,
    public rating: number,
    public content: string
  ) { }
}
