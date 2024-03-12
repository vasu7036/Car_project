import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarserviceService } from 'src/app/services/carservice.service';
import { CommonserviceService } from 'src/app/services/commonservice.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  public allCars: any = []
  public term: string = ""
  constructor(private _carService: CarserviceService, private _router: Router, private _commonService: CommonserviceService) {

    _commonService.getcar().subscribe(
      (data: any) => {
        console.log(data)
        if(data){
          _carService.getfiltervehicle(data.one, data.two, data.three).subscribe(
            (data: any) => {
              console.log(data)
              this.allCars = data;
            }
          )
        }
       
      }
    )

    _carService.getAllCars().subscribe(
      (data: any) => {
        this.allCars = data;
        console.log(this.allCars)
      }
    )

    _commonService.getterm().subscribe(
      (data: any) => {
        _carService.getfilter(data).subscribe(
          (data: any) => {
            this.allCars = data;
          }
        )
      }
    )
  }
  updatevehicle(id: string) {
    this._router.navigateByUrl("update-vehicle/" + id)

  }

  details(id: string) {
    console.log(id)
    this._router.navigateByUrl("singlecar-details/" + id)
  }

}
