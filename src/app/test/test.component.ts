import { Component } from '@angular/core';
import { Test } from '../Models/test'; 
import { TestService } from '../Services/test.service'; 
import { TestID } from '../Models/testID';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {

  constructor(private service: TestService , private router : Router) { }

  testData: TestID[] | undefined;

  ngOnInit(): void {
    this.refreshList()
    localStorage.clear()
  }

  refreshList(){
    this.testData = [];
    this.service.getData().subscribe(data=>{
      
      this.testData = data;
      console.log(this.testData)
    }) 
  }

  delete(id:any){
    this.service.deleteData(id).subscribe(data=>{
      this.refreshList()
    })
  }

  update(id:any){
    localStorage.setItem("id",id)
    this.router.navigate(['/update'])
  }

}
