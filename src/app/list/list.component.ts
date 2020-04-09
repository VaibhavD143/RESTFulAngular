import { Component, OnInit, ViewChild } from '@angular/core';
import { TestService } from '../services/test.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
import { MatTable } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @ViewChild (MatTable,{static :true}) table : MatTable<any>;
  @ViewChild(MatSort,{static :true}) sort : MatSort;
  dataSource:any;
  
  columnsToDisplay = ['index',"do",'ek'];
  constructor(private testService: TestService,
    private dialog : MatDialog,
    private snakBar : MatSnackBar) { }

  ngOnInit(): void {
    // this.loadData();
    this.dataSource= [
      {index : "one",ek:"two",do:"three"},
      {index : "two",ek:"two",do:"three"},
      {index : "three",ek:"two",do:"three"},
      {index : "four",ek:"two",do:"three"}
    ];
  }
  ngAfterViewInit (){
    this.dataSource.sort = this.sort;
  }
  // dataSource:any;
  name:string = "Vaibhav";
  // columnsToDisplay = ["id","code","name","rate","addRow","PopUp"];
  // loadData(){
  //   // this.testService.getTests().subscribe(
  //   //   data => this.dataSource=data,
  //   //   error => console.error("Error in getTests()!")
  //   // )
  // }

  addRow(data:any){
    console.log(data);
    this.dataSource.push(data);
    this.table.renderRows();
    this.snakBar.open("Row added!");
  }
  showPopUp(data:any){
    let popupRef = this.dialog.open(PopupComponent,{
      data : data,
      width : "1000px"
    });
  }
  callAlert(){
    alert("possible!");
    this.name = "changed";
  }
}