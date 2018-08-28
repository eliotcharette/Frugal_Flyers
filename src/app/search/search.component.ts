import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { apiKey } from './../env';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  {

  public adults: Adult[] = [
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

  private apiUrl = 'https://api.sandbox.amadeus.com/v1.2/flights/affiliate-search?origin=LON&destination=LAX&departure_date=2018-12-30&adults=1&apikey='+apiKey()


   data: any = {};
   constructor(private http: Http) {
     console.log('hello');
     this.getResult();
     this.getData();
   }
   getData() {
     return this.http.get(this.apiUrl)
     .map((res: Response) => res.json());
   }
   getResult() {
     this.getData().subscribe(data => {
       console.log(data);

       this.data = data;
     });
   }

}


export interface Adult {
  value: string;
  viewValue: string;
}
