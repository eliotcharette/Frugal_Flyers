import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { FlightService } from '../flight.service';
@Component({
  selector: 'app-hotelsearch',
  templateUrl: './hotelsearch.component.html',
  styleUrls: ['./hotelsearch.component.scss'],
  providers: [FlightService]
})
export class HotelsearchComponent  {

    results: any[] = null;
    noResult: boolean=false;
    constructor(private flightService: FlightService) { }
    submitForm(location: string, checkin: string, checkout: string) {
      console.log("FORMSUBMITTED");
      this.flightService.getHotels(location, checkin, checkout).subscribe(response => {
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
