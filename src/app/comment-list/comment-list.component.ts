import { HnService, HnComments } from './../hn.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {

  collapse: boolean;
  @Input() isRoot: boolean;
  @Input() item: number;
  @Input() ids: number[];
  comments: HnComments[];

  constructor(private _hnCloneService: HnService) { }

  async ngOnInit() {
    this.collapse = true;

    if (this.isRoot) {
      this.comments = await this._hnCloneService.fetchComments(this.ids);
    }
  }

  async onCollapse() {
    this.collapse = !this.collapse;
    if (this.comments === undefined && this.ids !== undefined) {
      this.comments = await this._hnCloneService.fetchComments(this.ids);
    }
  }

}
