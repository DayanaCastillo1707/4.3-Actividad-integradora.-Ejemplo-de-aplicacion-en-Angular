import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { AppModule } from './app/app.module';

const boton = document.getElementById('miBoton');

function sumar(){
  const numero1 = document.getElementById('numero1') as HTMLInputElement;
  const numero2 = document.getElementById('numero2') as HTMLInputElement;
  const result = document.getElementById('resultado');
  const suma = parseInt(numero1.value) + parseInt(numero2.value);
  
  result.innerText = suma.toString();
}
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));