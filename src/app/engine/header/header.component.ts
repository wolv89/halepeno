import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	@Output() navChange = new EventEmitter<string>();

	activeElement = 'recipes';

  constructor() { }

  ngOnInit() {
  }

  selectPage(page: string, e) {

  	e.stopPropagation();
  	e.preventDefault();
  	if(page == this.activeElement) return;

  	this.activeElement = page;
  	this.navChange.emit(this.activeElement);

  }

}
