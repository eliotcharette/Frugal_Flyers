import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Search } from '../search.model';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
   providers: [FlightService]
})
export class SearchComponent  {

  results: any[] = null;
  noResult: boolean=false;
  constructor(private flightService: FlightService) { }
  submitForm(departure: string,  arrival: string,  depatureDate: string,  returnDate: string,  passengers: number) {
    console.log("FORMSUBMITTED");
    this.flightService.getFlights(departure,  arrival,  depatureDate,  returnDate,  passengers).subscribe(response => {
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
}
