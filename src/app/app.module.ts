import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import {SQLite} from '@ionic-native/sqlite/ngx';
import {Toast} from '@ionic-native/toast/ngx';
import {AdddataPage} from '../pages/adddata/adddata';
import {EditdataPage} from '../pages/editdata/editdata';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AdddataPage,
    EditdataPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AdddataPage,
    EditdataPage
  ],
  providers: [
    StatusBar,
    SQLite,
    Toast,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
