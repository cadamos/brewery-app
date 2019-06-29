import { Component, OnInit, Input } from '@angular/core';
import { Brewery } from 'src/app/models/Brewery';

@Component({
  selector: 'app-brewery-item',
  templateUrl: './brewery-item.component.html',
  styleUrls: ['./brewery-item.component.css']
})
export class BreweryItemComponent implements OnInit {

  @Input() brewery: Brewery;
  public breweryUrl: string;
  public breweryPhone: string;

  constructor() { }

  ngOnInit() {
   this.breweryUrl = this.brewery.website_url;
   this.breweryPhone = "tel:" + this.brewery.phone;
  }

}
