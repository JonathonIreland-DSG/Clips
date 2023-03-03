import 'firebase/compat/auth';

import { AppModule } from './app/app.module';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import firebase from 'firebase/compat/app';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

if (environment.production) {
  enableProdMode();
}

firebase.initializeApp(environment.firebase)

let appInit = false;

firebase.auth().onAuthStateChanged(() =>{
  if(!appInit){
    platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
  }
  appInit = true
})
