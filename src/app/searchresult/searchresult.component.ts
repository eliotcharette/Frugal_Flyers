import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.scss']
})
export class SearchresultComponent  {

  @Input() childHotels;
 constructor() {
   console.log(this);
  }

}
