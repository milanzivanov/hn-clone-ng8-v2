import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/toPromise';


@Injectable({
  providedIn: 'root'
})
export class HnService {

  data: number[];
  beseUrl: string;

  constructor(private _http: HttpClient) {
      // good practice
      this.beseUrl = 'https://hacker-news.firebaseio.com/v0';
  }

  //
  async fetchStories(): Promise<HnInterface[]> {

    const observable = this._http.get(`${this.beseUrl}/topstories.json`) 
      .pipe(map(response => this.data = response as number[]));

    const promise = observable.toPromise();

    const ids = await promise;

    const temp = ids.map(p => this.fetchItem(p));

    const result = Promise.all(temp);

    return result;
  }

  fetchItem(id: number): Promise<HnInterface> {
    return this._http.get(`${this.beseUrl}/item/${id}.json`)
    .pipe(map((response) => response as HnInterface)).toPromise();
  }

  fetchComment(id: number): Promise<HnComments> {
    return this._http.get(`${this.beseUrl}/item/${id}.json`)
    .pipe(map((response) => response as HnComments)).toPromise();
  }

  fetchComments(ids: number[]): Promise<HnComments[]> {
    const temp = ids.map( p => this.fetchComment(p));
    const res = Promise.all(temp);
    return res;
  }

}


/////////////
// interfce
////////////
export interface HnInterface {
  by: string;
  descendants: number;
  id: number;
  kids?: (number)[] | null;
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
}

export interface HnComments {
  by: string;
  id: number;
  kids: number[];
  parent: number;
  text: string;
  time: number;
  type: string;
}