import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { FormdataserviceService } from '../formdataservice.service';
@Component({
  selector: 'app-all-user-details',
  templateUrl: './all-user-details.component.html',
  styleUrls: ['./all-user-details.component.css']
})
export class AllUserDetailsComponent {
  // rowData:any[]=[
  //   {make:"Toyato",model:'Celcia',price:30000},
  //   {make:"Toyato",model:'Celcia',price:40000},
  //   {make:"Toyato",model:'Celcia',price:50000}, 
  //   {make:"Toyato",model:'Celcia',price:60000},
  //   {make:"Toyato",model:'Celcia',price:70000},
  // ];
  rowData$:Observable<any>;
  colDefs: ColDef[] = [
    { field: 'id'},
    { field: 'firstName'},
    { field: 'lastName' },
    { field: 'userName' },
    { field: 'age' },
    { field: 'email' },
    { field: 'mobileNo' }
  ];

  constructor(private http:HttpClient,private formService:FormdataserviceService){}
  ngOnInit(){
    this.rowData$=this.formService.getUserDetails();
    console.log(this.rowData$);
  }
}
