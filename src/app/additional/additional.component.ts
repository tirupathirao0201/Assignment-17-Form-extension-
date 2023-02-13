import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-additional',
  templateUrl: './additional.component.html',
  styleUrls: ['./additional.component.css']
})
export class AdditionalComponent {
  addiInputLabel:string='';
  addiInputValue:string='';
  addiDropdownValue:string='';
  @Output() additionalInput =new EventEmitter<string[]>();
  @Output() showError =new EventEmitter<boolean>();
  inputError:boolean=false;
  isStringType(str:string){
    return typeof str === 'string';
  }
  isNumberType(str:string){
    return /^\d+$/.test(str);
  }
  isHexaType(str: string){
    return /^[0-9A-Fa-f]+$/.test(str);
  }
  isBinType(str:string){
    return /^[01]+$/.test(str);
  }
  isBooleanType(str:string){
    return str === 'true' || str === 'false' || str=='0' || str=='1';
  }
  handleAdditionalValue(event1:HTMLInputElement,event2:HTMLSelectElement,event3:HTMLInputElement):void{
    this.addiInputValue=event1.value;
    this.addiDropdownValue=event2.value;
    this.addiInputLabel=event3.value;
    console.log(this.addiDropdownValue);
    console.log(this.addiInputValue);
    if((this.isStringType(this.addiInputValue) && this.addiDropdownValue==="string") || (this.isBinType(this.addiInputValue) && this.addiDropdownValue==="binary") || (this.isBooleanType(this.addiInputValue) && this.addiDropdownValue==="boolean") || (this.isNumberType(this.addiInputValue) && this.addiDropdownValue=="number") || (this.isHexaType(this.addiInputValue) && this.addiDropdownValue=="colorcode"))
      {
        console.log("Iam add",this.addiInputLabel,this.addiInputValue)
        this.additionalInput.emit([this.addiInputLabel,this.addiInputValue]);
        this.showError.emit(false);
      }
    else{
  
      this.additionalInput.emit(['','']);
      this.showError.emit(true);
    }
  }

}
