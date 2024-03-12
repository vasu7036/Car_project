import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarserviceService } from 'src/app/services/carservice.service';

@Component({
  selector: 'app-singlecar-details',
  templateUrl: './singlecar-details.component.html',
  styleUrls: ['./singlecar-details.component.css']
})
export class SinglecarDetailsComponent {
  public id:string = "";
  public carDetails:any = []
  constructor(private _carService:CarserviceService,private _activatedRoute:ActivatedRoute){
    _activatedRoute.params.subscribe(
      (data:any)=>{
        this.id = data.id;
        console.log(this.id)
        if(this.id){
          _carService.getcar(this.id).subscribe(
            (data:any)=>{
              this.carDetails = data;
            }
          )
        }
      }
    )

  }



}
