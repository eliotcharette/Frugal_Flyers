
import { Component, Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import { FlightService } from '../flight.service';


import { Search } from '../search.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
  providers:[FlightService]
})
export class ResultsComponent  {
  @Input() childFlights;
 constructor() {
   console.log(this);
  }
}
