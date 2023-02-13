import { Component } from '@angular/core';
import { FormdataserviceService } from '../formdataservice.service';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  data:any;
  userData:any;
  finaldata:any;
  userAdditional:any;
  constructor(private formService:FormdataserviceService){
    this.formService.newSource.subscribe((value)=>this.userData=value);
    console.log(" i am in display",this.userData);
    this.formService.newAdditional.subscribe((value)=>this.userAdditional=value);
    console.log("I am in",this.userAdditional);
  }



}
