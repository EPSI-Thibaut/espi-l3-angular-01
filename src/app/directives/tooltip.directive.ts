import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {
  @Input('appTooltip') tooltipText: string = '';
  tooltipElement: any;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.tooltipElement = this.renderer.createElement('span');
    this.tooltipElement.innerText = this.tooltipText;
    this.renderer.appendChild(this.el.nativeElement, this.tooltipElement);
    this.renderer.setStyle(this.tooltipElement, 'position', 'absolute');
    this.renderer.setStyle(this.tooltipElement, 'background', 'black');
    this.renderer.setStyle(this.tooltipElement, 'color', 'white');
    this.renderer.setStyle(this.tooltipElement, 'padding', '5px');
    this.renderer.setStyle(this.tooltipElement, 'borderRadius', '5px');
    this.renderer.setStyle(this.tooltipElement, 'top', '20px');
    this.renderer.setStyle(this.tooltipElement, 'left', '10px');
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.tooltipElement) {
      this.renderer.removeChild(this.el.nativeElement, this.tooltipElement);
    }
  }

  @HostListener('click') onClick() {
    alert('Vous avez cliquÃ© sur le tooltip');
  }
}