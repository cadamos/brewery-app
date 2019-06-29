import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {
  
  @Output() searchBreweries: EventEmitter<string> = new EventEmitter();
  state: string;

  constructor() { }

  ngOnInit() {
  }

  onSearch() {
    this.searchBreweries.emit(this.state);
  } 
}
