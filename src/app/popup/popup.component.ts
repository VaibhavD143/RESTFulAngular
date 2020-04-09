import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  cols:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any) { 
  }
  ngOnInit(): void {
    this.cols = Object.keys(this.data);
  } 
}
