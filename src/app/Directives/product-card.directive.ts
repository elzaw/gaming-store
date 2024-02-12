import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[ProductCard]',
  standalone: true,
})
export class ProductCardDirective implements OnChanges {
  @Input() originalBoxShadow: string = '0 0 5px rgba(0, 0, 0, 0.3)';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseover') onMouseOver() {
    // this.el.nativeElement.style.borderRadius = '50px';
    this.el.nativeElement.style.boxShadow = '0 0 20px rgba(0, 0, 0, 15)';

    // this.renderer.setStyle(
    //   this.el.nativeElement,
    //   'box-shadow',
    //   '0 0 10px rgba(0, 0, 0, 0.5)'
    // );
  }

  @HostListener('mouseout') onMouseOut() {
    // this.el.nativeElement.style.borderRadius = '100px';
    this.el.nativeElement.style.boxShadow = this.originalBoxShadow;
    // this.renderer.setStyle(
    //   this.el.nativeElement,
    //   'box-shadow',
    //   this.originalBoxShadow
    // );
  }

  ngOnChanges() {
    this.el.nativeElement.style.boxShadow = this.originalBoxShadow;

    this.renderer.setStyle(
      this.el.nativeElement,
      'box-shadow',
      this.originalBoxShadow
    );
  }
}
