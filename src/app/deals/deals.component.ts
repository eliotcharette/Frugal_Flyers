import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Search } from '../search.model';
import { FlightService } from '../flight.service';
@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.scss'],
  providers: [FlightService]
})
export class DealsComponent  {

  results: any[] = null;
  noResult: boolean=false;
  constructor(private flightService: FlightService) { }
  submitForm(departure: string,  arrival: string,  depatureDate: string,  returnDate: string,  passengers: number, maxPrice: number) {
    console.log("FORMSUBMITTED");
    this.flightService.getDeals(departure,  arrival,  depatureDate,  returnDate,  passengers, maxPrice).subscribe(response => {
      // console.log(response._body.json().request_id);
      console.log(response.json().results);
      if(response.json().results.length > 0)
      {
        this.results= response.json();
        console.log(this.results);
        // this._router.navigate(["/results", response.json()]);
      }

    });
  }

  adults: Adult[] = [
       {value: '1', viewValue: '1'},
       {value: '2', viewValue: '2'},
       {value: '3', viewValue: '3'},
       {value: '4', viewValue: '4'},
       {value: '5', viewValue: '5'},
       {value: '6', viewValue: '6'},
       {value: '7', viewValue: '7'},
       {value: '8', viewValue: '8'},
       {value: '9', viewValue: '9'}
     ];

}
export interface Adult {
  value: string;
  viewValue: string;
}
