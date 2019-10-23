import { HnService, HnInterface } from './../hn.service';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item: HnInterface;

  constructor(private _HnService: HnService) { }

  ngOnInit() {

  }

}
