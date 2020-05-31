import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-list',
  templateUrl: './big-list.component.html',
  styleUrls: ['./big-list.component.css']
})
export class BigListComponent implements OnInit {

  unit = {
    firstName: 'first',
    lastName: 'last',
    type: 'type'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
