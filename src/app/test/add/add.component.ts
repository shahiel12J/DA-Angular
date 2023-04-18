import { Component } from '@angular/core';
import { TestService } from 'src/app/Services/test.service'; 

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {

  constructor(private service: TestService ) { }

  title: string | undefined;
  price: number| undefined;
  des: string | undefined;
  img: string| undefined;
  cat: string| undefined;

  ngOnInit(): void {
    
  }

  addPro(){
    var val = 
     {Title:this.title,
      Price:this.price,
      Description:this.des,
      Image:this.img,
      Category:this.cat}
  
        this.service.addData(val).subscribe(res =>{
          console.log(res)
        })
      
  }

}
