import { Component, OnInit } from '@angular/core';
import { HnService, HnStories } from './../hn.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {

  items: HnStories[];
  showLoader: boolean;

  constructor(private _hnCloneService: HnService) {
  }

  async ngOnInit() {
    // loader show
    this.showLoader = true;

    this.items = await this._hnCloneService.fetchStories();
    console.log(this.items);

    // loader hide
    this.showLoader = false;
  }

}
