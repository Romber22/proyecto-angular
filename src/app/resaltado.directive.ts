import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective implements OnInit {

  constructor(public el: ElementRef) {
    
  }

  ngOnInit(): void {
    var element = this.el.nativeElement;
    element.style.backgroundColor = "#D988B9";
    element.style.padding = "20px";
    element.style.color = "white";
    element.style.marginTop = "15px";
    element.style.borderRadius = "15px";
    element.style.textAlign = "center"
    element.style.fontSize = "26px"

    // console.log(element.innerText); // Esta es la página de contacto, puedes enviarnos cualquier duda :)
    // element.innerText = element.innerText.toUpperCase(); // Lo pone todo a mayúsculas
    // element.innerText = element.innerText.replace('contacto', '☏');
  }

}
