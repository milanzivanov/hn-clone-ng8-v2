import { Component, OnInit } from '@angular/core';
import { HnService, HnInterface } from './../hn.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {

  items: HnInterface[];

  constructor(private _hnCloneService: HnService) {
    // this.items = new Array(10);
  }

  async ngOnInit() {
    const temp = await this._hnCloneService.fetchStories();

    this.items = temp.slice(0, 5);
    // console.log(this.items);
  }

}
