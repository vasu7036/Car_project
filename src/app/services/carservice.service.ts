import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarserviceService {
  public baseUrl:string = "http://localhost:3000/carDetails"

  constructor(private _httpClient:HttpClient) { }

  getAllCars():Observable<any>{
    return this._httpClient.get(this.baseUrl)
  }
  getcar(id:string):Observable<any>{
    return this._httpClient.get(this.baseUrl+"/"+id)
  }
  updatevehicle(id:string,data:any):Observable<any>{
    return this._httpClient.put(this.baseUrl+"/"+id,data)
  }
  getfilter(term:string):Observable<any>{
    return this._httpClient.get(this.baseUrl+"?q="+term)
  }
  getfiltervehicle(one:string,two:string,three:string):Observable<any>{

    let baseUrl=this.baseUrl;
  
    let queries = "";
    if(one){
      queries += "make="+one+"&";
    }
    if(two){
      queries += "model="+two+"&";
    }
    if(three){
      queries += "year="+three+"&";
    }

    if(queries){
      baseUrl += "?"+queries
    }
    return this._httpClient.get(baseUrl);
  }
}
