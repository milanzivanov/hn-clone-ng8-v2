import { Component, OnInit } from '@angular/core';
import { HnService, HnInterface } from './../hn.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {

  items: HnInterface[];
  showLoader: boolean;

  constructor(private _hnCloneService: HnService) {
    // this.items = new Array(10);
  }

  async ngOnInit() {
    // loader show
    this.showLoader = true;

    this.items = await this._hnCloneService.fetchStories();

    // loader hide
    this.showLoader = false;
  }

}
