import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  title : string="product-list works!";


  ngOnInit() {
    setTimeout(() => {
      this.title = 'Updated Title';
    }, 2000);
  }


}
