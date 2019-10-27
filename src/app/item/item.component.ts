import { HnService, HnStories } from './../hn.service';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item: HnStories;
  comments: HnStories[];

  constructor(private _HnService: HnService) { }

  ngOnInit() {
  }

}
