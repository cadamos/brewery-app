import { Pipe, PipeTransform } from '@angular/core';

import { Brewery } from '../app/models/Brewery';

@Pipe({
  name: 'specBrewery'
})
export class SpecBreweryPipe implements PipeTransform {


  transform(breweries: Brewery[], state: string): any {
    
    if (!breweries || !state) {
      return breweries;
    } 

    return breweries.filter((brewery) => {
      return brewery.name.toLowerCase().includes(state.toLowerCase()) || 
      brewery.city.toLowerCase().includes(state.toLowerCase()) ||
      brewery.state.toLowerCase().includes(state.toLowerCase())});
    }

}
