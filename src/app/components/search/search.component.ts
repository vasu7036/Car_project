import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CarserviceService } from 'src/app/services/carservice.service';
import { CommonserviceService } from 'src/app/services/commonservice.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  constructor(private _carService:CarserviceService,private _router:Router,private _common:CommonserviceService){
  
  }

  search(){
    this._router.navigateByUrl("/details")
    this._common.setcar(this.cardetails.value)
    console.log(this.cardetails.value)
  }

  public cardetails:FormGroup = new FormGroup({
    one:new FormControl(""),
    two: new FormControl(""),
    three:new FormControl("")
  })

  advancesearch(){
    this._router.navigateByUrl("/details")
    location.reload()
  }
  

}
