import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  @HostBinding('style.backgroundColor') myBackgroundColor:string;

  @HostBinding('style.width.px') width:number;

  @HostBinding('style.fontSize') myFontSize:string;



  constructor() {}

  ngOnInit() {
   // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
  }

@HostListener('mouseenter') mouseEnterEvent (eventDate:Event){
  this.myBackgroundColor = 'yellow';
  this.myFontSize = '35px';
}

@HostListener('mouseleave') mouseLeaveEvent (eventDate:Event){
  this.myBackgroundColor = 'transparent';
  this.myFontSize = '18px';
}



}
