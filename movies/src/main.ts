//archivo de inicio de la aplicacion

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)// componente raiz
  .catch((err) => console.error(err));
