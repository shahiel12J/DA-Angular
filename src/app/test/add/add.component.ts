import { Component } from '@angular/core';
import { TestService } from 'src/app/Services/test.service'; 
import { Test } from 'src/app/Models/test';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {

  constructor(private service: TestService ) { }

  title!: string ;
  price!: number;
  des!: string ;
  img!: string;
  cat!: string;

  ngOnInit(): void {
    
  }

  addPro(){

    var val = 
    JSON.stringify( {title:this.title,
      price:Number(this.price),
      description:this.des,
      image:this.img,
      category:this.cat})

      // console.log(val)
        this.service.addData( {title: this.title, price: Number(this.price), description: this.des, image: this.img, category: this.cat}).subscribe(res =>{
          console.log(JSON.stringify({title: this.title, price: Number(this.price), description: this.des, image: this.img, category: this.cat}))
        })
      
  }

}
