import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.css']
})
export class GaleryComponent implements OnInit {

  @Input() anchura: any;
  @Input('velocidad') velocityGalery: any;

  @Output() mostrarAutor = new EventEmitter();

  public autor: any;

  constructor() {
    this.autor = {
      nombre: 'Andrea Romero',
      web: 'www.github.com/Romber22',
      email: 'andrearomber@gmail.com'
    };
  }

  ngOnInit(): void {
    this.animationImages();
  }

  animationImages() {
    $('.img').animate({
      width: this.anchura+'px',
      borderRadius: '30px',
      marginTop: '20px'
    }, this.velocityGalery);
    // console.log("animaciones cargadas");
  }

  // Evento lanzador
  lanzar(event: any) {
    // console.log(event);
    this.mostrarAutor.emit(this.autor);
  }
}
