import {Directive, ElementRef, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[clickOutSide]'
})
export class ClickOutSideDirective {

  @Output('clickOutSide') clickOutside: EventEmitter<any> = new EventEmitter();

  constructor(private _elementRef: ElementRef) {
  }

  @HostListener('document:click', ['$event.target'])
  onMouseEnter(targetElement) {
    const clickedInside = this._elementRef.nativeElement.contains(targetElement);
    const unClose = targetElement.classList.contains('unClose');
    if (!clickedInside && !unClose) {
      this.clickOutside.emit(null);
    }
  }
}
