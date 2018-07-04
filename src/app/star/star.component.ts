import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {

  private stars: boolean[];
  @Input()
  private rating: number = 0;

  constructor() { }

  ngOnInit() {
    this.stars = [];
    for (var i = 0; i < 5; i++) {
      this.stars.push(i < this.rating);
      //true 实心，false 空心
    }
    console.log(this.stars)
    // this.stars=[true,false,false,true]
  }

}
