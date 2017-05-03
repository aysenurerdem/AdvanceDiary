import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { NgCalendarModule  } from 'ionic2-calendar';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';

import { MyApp } from './app.component';
import { MyStoriesPage } from '../pages/myStories/myStories';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { TabsPage } from '../pages/myStories/tabs/tabs';
import { LoginPage } from '../pages/login-page/login-page';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyStoriesRegular } from "../pages/myStories/regular/regular";
import { MyStoriesMeal } from "../pages/myStories/meal/meal";
import { MyStoriesVisual } from "../pages/myStories/visual/visual";


const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'fe6692af'
  }
};

@NgModule({
  declarations: [
    MyApp,
    MyStoriesPage,
    DashboardPage,
    TabsPage,
    LoginPage,
    MyStoriesRegular,
    MyStoriesMeal,
    MyStoriesVisual
  ],
  imports: [
    BrowserModule,
    NgCalendarModule,
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings)

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyStoriesPage,
    DashboardPage,
    TabsPage,
    LoginPage,
    MyStoriesRegular,
    MyStoriesMeal,
    MyStoriesVisual
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
