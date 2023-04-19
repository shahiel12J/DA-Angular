import { TestID } from './../../Models/testID';
import { Component } from '@angular/core';
import { TestService } from 'src/app/Services/test.service'; 
import { Test } from 'src/app/Models/test';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent {

  constructor(private service: TestService ) { }

  title!: string ;
  price!: number;
  des!: string ;
  img!: string;
  cat!: string;

  titlePlaceholder!: string ;
  pricePlaceholder!: number;
  desPlaceholder!: string ;
  imgPlaceholder!: string;
  catPlaceholder!: string;

  ID = localStorage.getItem("id")

  ngOnInit(): void {
    this.getData()
  }

  update(){
        this.service.updateData(( {title: this.title, price: Number(this.price), description: this.des, image: this.img, category: this.cat}), this.ID).subscribe(res =>{
          console.log(JSON.stringify({title: this.title, price: Number(this.price), description: this.des, image: this.img, category: this.cat}))
        })
  }

  getData(){
    this.service.getIData(this.ID).subscribe((data:any)=>{
      this.titlePlaceholder = data.title ;
      this.pricePlaceholder = data.price;
      this.desPlaceholder = data.description;
      this.imgPlaceholder = data.image;
      this.catPlaceholder = data.category;
    }) 
  }

}
