import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, isObservable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {
  public baseUrl:string = "http://localhost:3000/carDetails"

  public termservice:BehaviorSubject<string> = new BehaviorSubject("")
  public newService:BehaviorSubject<any> = new BehaviorSubject([])



  constructor(private _httpClient:HttpClient) { }


  setterm(data:string){
    this.termservice.next(data)
  }

  getterm(){
    return this.termservice.asObservable()
  }

  setcar(data1:any){
    this.newService.next(data1);
    // this.newService.next(data2);
    // this.newService.next(data3);
    console.log(this.newService)

  }

  getcar(){
    return this.newService.asObservable();

  }


}
