import { Injectable } from '@angular/core';
import { Global } from './global';

@Injectable()
export class UploadService {

    constructor() {
        
    }

    makeFileRequest(mi_url: any, params: Array<String>, files: Array<File>, name: String, id: String) {
        // Devolvemos una promesa para esperar el resultado de la petición ajax
        return new Promise(function(resolve, reject) {
            
            // Creamos un objeto FormDara que simula un formulario real.
            var formData: any = new FormData();
            
            // Creamos el objeto para hacer una petición ajax
            var xhr = new XMLHttpRequest();

            // Recorremos todos los ficheros que hayamos adjuntado
            for(let i = 0; i < files.length; i++) {
                
                //Se los añadimos al formulario para su posterior envío
                formData.append(name, files[i], files[i].name);
            }

            // Comprobamos el estado de la petición ajax
            xhr.onreadystatechange = function() {
                if(xhr.readyState == 4) {
                    if(xhr.status == 200) {

                        // Si el resultado es positivo, que nos devuelva la respuesta positiva
                        resolve(JSON.parse(xhr.response));
                    } else {

                        // Si no, que nos devuelva el error
                        reject(xhr.response);
                    }
                }
            }

            // Hacemos la petición por POST y a la url que le indiquemos
            xhr.open('POST', mi_url, true);

            // Ejecutamos la petición ajax
            xhr.send(formData);
        });
    }
}