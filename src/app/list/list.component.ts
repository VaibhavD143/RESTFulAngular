import { Component, OnInit, ViewChild } from '@angular/core';
import { TestService } from '../services/test.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { Key } from 'protractor';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @ViewChild (MatTable,{static :true}) table : MatTable<any>;
  @ViewChild(MatSort,{static :true}) sort : MatSort;
  dataSource:any;
  
  columnsToDisplay = ['index.one',"ek",'do'];
  constructor(private testService: TestService,
    private dialog : MatDialog,
    private snakBar : MatSnackBar) { }

  ngOnInit(): void {
    // this.loadData();
    this.dataSource= [
      {index : {one:"one",two:{me:"here"}},ek:"1",do:"3"},
      {index : {one:"bc",two:{me:"here2"}},ek:"2",do:"4"},
      {index : {one:"fds",two:{me:"here3"}},ek:"3",do:"1"},
      {index : {one:"fda",two:{me:"here4"}},ek:"4",do:"2"}
    ];
  
    this.dataSource = new MatTableDataSource(this.dataSource);
    this.dataSource.filterPredicate = (data, filter) => {
      let dataStr;
      let keys;
      for(const column of this.columnsToDisplay){
        keys = column.split('.');
        dataStr+=this.nestedFilter(data,keys);
      }
      return dataStr.indexOf(filter) != -1; 
    } 
  }
  nestedFilter(data,keys){
    for(let key of keys){
        data = data[key]
      }
    return data || '';
  }

  ngAfterViewInit (){
    this.dataSource.sortingDataAccessor =
    (data: object, sortHeaderId: string): string | number => {
      const propPath = sortHeaderId.split('.');
      const value: any = propPath
        .reduce((curObj, property) => curObj[property], data);
      return !isNaN(value) ? Number(value) : value;
    };
    this.dataSource.sort = this.sort;
    console.log(this.dataSource);
    
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