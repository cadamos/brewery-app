import { Component, OnInit, Input } from '@angular/core';
import { BreweryService } from '../../services/brewery.service';

import { Brewery } from  '../../models/Brewery';

@Component({
  selector: 'app-brewery',
  templateUrl: './brewery.component.html',
  styleUrls: ['./brewery.component.css']
})
export class BreweryComponent implements OnInit {

  state: string;

  breweries: Brewery[];

  constructor(private breweryService: BreweryService) { }

  ngOnInit() {
    this.breweryService.getAllBreweries().subscribe(breweries => {
      this.breweries = breweries;
    });
  }

  searchBreweries(state: string) {
    this.state = state;
    if (!state) {
      this.breweryService.getAllBreweries().subscribe(breweries => {
        this.breweries = breweries;
      });
    } else {
      this.breweryService.getBreweries(state).subscribe(breweries => {
        this.breweries = breweries;
      });
    }
  }
}
