import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CarserviceService } from 'src/app/services/carservice.service';

@Component({
  selector: 'app-update-vehicle',
  templateUrl: './update-vehicle.component.html',
  styleUrls: ['./update-vehicle.component.css']
})
export class UpdateVehicleComponent {
  public id:string = ""
  constructor(private _carService:CarserviceService,private _activatedRoute:ActivatedRoute, private _router:Router){
  _activatedRoute.params.subscribe(
    (data:any)=>{
      this.id = data.id;
      console.log(data)
      if(this.id){
        _carService.getcar(data.id).subscribe(
          (data:any)=>{
          this.vehicle.patchValue(data)       
          }
        )
      }
    }
  )   
  }

  public vehicle:FormGroup = new FormGroup({
    make:new FormControl(),
    model:new FormControl(),
    year:new FormControl(),
    fuelType:new FormControl(),
    transmission:new FormControl(),
    image:new FormControl()
  })
  update(){
    this._carService.updatevehicle(this.id,this.vehicle.value).subscribe(
      (data:any)=>{
        alert("updated successfully");
        this._router.navigateByUrl("/details")  
      }
     
    )
  }
}
