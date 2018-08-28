import { Injectable } from '@angular/core';
import { apiKey } from '././env';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Search } from './search.model';
@Injectable()
export class FlightService {

    constructor(private http: Http) { }
    getFlights(departure: string,  arrival: string,  depatureDate: string,  returnDate: string,  passengers: number)
    {
      return this.http.get(`https://api.sandbox.amadeus.com/v1.2/flights/low-fare-search?origin=${departure}&destination=${arrival}&departure_date=${depatureDate}&return_date=${returnDate}&adults=${passengers}&apikey=`+apiKey())
    }

}
