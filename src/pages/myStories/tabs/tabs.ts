import { Component } from '@angular/core';


import { MyStoriesRegular } from "../regular/regular";
import { MyStoriesMeal } from "../meal/meal";
import { MyStoriesVisual } from "../visual/visual";


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MyStoriesRegular;
  tab2Root = MyStoriesMeal;
  tab3Root = MyStoriesVisual;

  constructor() {

  }
}
