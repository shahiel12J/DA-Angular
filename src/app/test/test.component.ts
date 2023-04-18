import { Component } from '@angular/core';
import { Test } from '../Models/test'; 
import { TestService } from '../Services/test.service'; 

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {

  constructor(private service: TestService ) { }

  testData: Test[] | undefined;

  ngOnInit(): void {
    this.refreshList()
  }

  refreshList(){
    this.testData = [];
    this.service.getData().subscribe(data=>{
      
      this.testData = data;
      console.log(this.testData)
    }) 
  }

}
