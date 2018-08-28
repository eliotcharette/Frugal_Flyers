import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navheader',
  templateUrl: './navheader.component.html',
  styleUrls: ['./navheader.component.scss']
})
export class NavheaderComponent implements OnInit {
  public divChoice: string;
  constructor() { }
  divSwitch(divName) {
    this.divChoice = divName;
  }
  ngOnInit() {
    this.divChoice = 'home';
  }

}
