import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() emitOnSelect = new EventEmitter<String>();


  onSelectLink(data: string) {
    this.emitOnSelect.emit(data);

  }
}
