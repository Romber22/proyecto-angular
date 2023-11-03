import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import * as $ from 'jquery';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public widthGalery: any;
  public anchuraToGalery: any;
  public optionsVelocity: String[] = ['slow', 'normal', 'fast'];
  public velocityGalery: any;
  public velocidadToGalery: any;
  public autor: any;

  @ViewChild('textos', {static: true}) textos: any;

  constructor(
    public formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    // $(".galeria").css("background-color", "green");

    var opcion_clasica = document.querySelector('#texto')?.innerHTML
    // console.log(opcion_clasica);
    // console.log(this.textos.nativeElement.textContent);
  }

  cargarGalery() {
    this.anchuraToGalery = this.widthGalery;
    this.velocidadToGalery = this.velocityGalery;
  }

  resetGalery() {
    this.anchuraToGalery = false;
    this.velocidadToGalery = false;
  }

  getAutor(event: any) {
    // console.log(event);
    this.autor = event;
  }

  onSubmit(form: any) {
    // console.log(form.value); // Para sacar los valores del formulario
    if(form.value.motivo) {
      var mensaje = 'Gracias por tu sugerencia. En breves te contestaremos tu duda con motivo: "' + form.value.motivo + '".';
      alert(mensaje);

      form.reset();
    } else {
      alert('Debe rellenar el motivo');
    }
    
  }

}
