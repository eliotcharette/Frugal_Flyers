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
    getHotels(location: string, checkin: string, checkout: string){
      return this.http.get(`https://api.sandbox.amadeus.com/v1.2/hotels/search-airport?location=${location}&check_in=${checkin}&check_out=${checkout}&apikey=`+apiKey())
    }
    getDeals(departure: string,  arrival: string,  depatureDate: string,  returnDate: string,  passengers: number, maxPrice: number)
    {
      return this.http.get(`https://api.sandbox.amadeus.com/v1.2/flights/low-fare-search?origin=${departure}&destination=${arrival}&departure_date=${depatureDate}&return_date=${returnDate}&adults=${passengers}&max_price=${maxPrice}&apikey=`+apiKey())
    }

}
