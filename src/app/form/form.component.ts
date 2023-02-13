import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NameError } from '../custom-validators/name.validator';
import { usernameError } from '../custom-validators/username.validator';
import { noAlphabetsAllowed } from '../custom-validators/mobileno.validator'
import { invalidMailFormatError } from '../custom-validators/email.validator';
import { ageError } from '../custom-validators/age.validator';
import { ActivatedRoute, Router } from '@angular/router';
import { FormdataserviceService } from '../formdataservice.service';
FormdataserviceService
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  additionalDetails:string[]=[];
  finalSubmitData: any;
  addedList = [];
  counter:number=0;
  typeMismatchError: boolean = false;
  addiLabelValue:string='';
  addiValue:string=''
  additionalError: string = "Field should not be empty"
  reactiveForm: FormGroup = new FormGroup({
    firstName: new FormControl(null, NameError),
    lastName: new FormControl(null, NameError),
    userName: new FormControl(null, usernameError),
    age: new FormControl(null, ageError),
    email: new FormControl(null, invalidMailFormatError),
    mobileNo: new FormControl(null, noAlphabetsAllowed),
    // additional : new FormControl(null,[Validators.required]),
  });

  constructor(private router: Router,
    private formService:FormdataserviceService) { }
  validateForm() {
    console.log("here");
    if (this.reactiveForm.status==="VALID" &&  !this.typeMismatchError){
    console.log(this.reactiveForm);
    console.log("add",this.additionalDetails);
    this.finalSubmitData = this.reactiveForm.value;
    this.formService.saveUserDetails(this.finalSubmitData).subscribe((data)=>console.warn(data));
    this.formService.func(this.finalSubmitData);
    this.formService.funcadd(this.additionalDetails);
    this.router.navigate(['display'])
    

  }

  }

  handleAdditionInput(event){
    console.log("Form",event)
    this.addiValue=event;
  }
  isError(event){
    this.typeMismatchError=event;
    console.log("Form",event);
  }


  handleAdditionalClick(event: MouseEvent) : void{
    event.preventDefault();
    console.log("I am here");
    if ( ! this.typeMismatchError){
      this.addedList.push(this.counter);
      this.counter+=1;
      this.additionalDetails.push(this.addiValue);
      console.log("I am form",this.additionalDetails);
      this.typeMismatchError=false;

    }
    else{

      alert("Please add some data to previous one to add new one")
    }

  }

}
