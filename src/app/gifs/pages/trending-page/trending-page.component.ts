import { Component } from '@angular/core';
import { GifListComponent } from "../../components/gifs-list/gif-list.component";

@Component({
  selector: 'app-trending-page',
  imports: [GifListComponent],
  templateUrl: './trending-page.component.html',
})
export default class TrendingPageComponent { }
