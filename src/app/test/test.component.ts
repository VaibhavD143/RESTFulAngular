import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @Output() callAlert : EventEmitter<any> = new EventEmitter();
  @Input() name : String;
  constructor(private testService:TestService) { }
  num = 5;
  ngOnInit(): void {
    console.log("app-test ngOnInit()");  
    this.testService.getTests().subscribe(data=>{
      console.log(data);
      console.log("data recieved");
    },
    error=>{
      console.error("error occured!");
      console.error(error.erorr);
    });
  }

  testException(){
    this.testService.testException(this.num).subscribe(data=>{
      console.log(data);
    },
    error=>{
      console.error(error.error);
    });
  }

}
