import { HnService, HnComments } from './../hn.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {

  collapse: boolean;

  @Input() item: number;
  @Input() items: number[];
  comments: HnComments[];

  constructor(private _hnCloneService: HnService) { }

  ngOnInit() {
    this.collapse = true;
  }

  async onCollapse() {
    this.collapse = !this.collapse;
    if (this.comments === undefined && this.items !== undefined) {
      this.comments = await this._hnCloneService.fetchComments(this.items);
    }
  }

}
