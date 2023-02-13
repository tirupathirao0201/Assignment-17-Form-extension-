import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';

interface User{
  firstName:string;
  lastName:string;
  userName:string;
  age:number;
  email:string;
  mobileno:string;
}
@Injectable({
  providedIn: 'root'
})
export class FormdataserviceService {

  private userDetails = new BehaviorSubject<any>(null);
  private additionalDetails = new BehaviorSubject<any>(null);
  newSource = this.userDetails.asObservable();
  newAdditional=this.additionalDetails.asObservable();

  func(x:any){
    this.userDetails.next(x);
  }

  funcadd(y:any){
    this.additionalDetails.next(y);
  }

  constructor(private http : HttpClient){}
  url:string='http://localhost:3000/users';
  saveUserDetails(data:any){
    return this.http.post(this.url,data);
  }
  getUserDetails():Observable<any>{
    return this.http.get<any>(this.url);
  }

}
