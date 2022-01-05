import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  @Input() placeholder = "Search";
  @Output() searchFilterChanged = new EventEmitter<string>();

  onChange(searchTerm: string){
    this.searchFilterChanged.emit(searchTerm)
  }

}
