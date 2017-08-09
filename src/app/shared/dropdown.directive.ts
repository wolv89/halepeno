import { Directive, OnInit, HostBinding, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
	selector: '[appDropdown]'
})
export class DropdownDirective {

	//@HostBinding('class.open') class: string; // Can bind to class.NAME_OF_CLASS
	isOpen = false;

	constructor(private element: ElementRef, private renderer: Renderer2) { }

	ngOnInit() {
	}

	@HostListener('click') toggleDropdown(eventData: Event) {
		if(this.isOpen) {
			this.isOpen = false;
			this.renderer.removeClass(this.element.nativeElement, 'open');
		}
		else {
			this.isOpen = true;
			this.renderer.addClass(this.element.nativeElement, 'open');
		}
	}

}