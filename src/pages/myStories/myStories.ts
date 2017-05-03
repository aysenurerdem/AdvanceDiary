import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TabsPage } from '../myStories/tabs/tabs';

@Component({
  templateUrl: 'myStories.html'
})
export class MyStoriesPage {

  rootPage:any = TabsPage;

  constructor(public navCtrl: NavController) {

  }

}
