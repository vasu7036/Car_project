import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarserviceService } from 'src/app/services/carservice.service';
import { CommonserviceService } from 'src/app/services/commonservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  public term:string = "";
  
  constructor( private _commonService:CommonserviceService,private _router:Router){}
  search(){
    this._commonService.setterm(this.term);
    this._router.navigateByUrl("/details")
  }

}
