import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  filmList=[
    "Usual Suspect",
    "Star Wars 1",
    "Star Wars 2",
    "Star Wars 3"
  ]

  displayfilmList:boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
