import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'create-button',
  templateUrl: './create-button.component.html',
  styleUrls: ['./create-button.component.scss']
})
export class CreateButtonComponent {

  @Input() name = "Create new";
  @Output() create = new EventEmitter<void>();

  onClick(){
    this.create.emit()
  }
}
