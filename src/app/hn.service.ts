import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


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

  async fetchStories(): Promise<HnStories[]> {
    const ids = await fetchEx<number[]>(`${this.beseUrl}/topstories.json`);

    const temp = ids.slice(0, 15).map(p => this.fetchItem(p));
    const result = Promise.all(temp);

    return result;
  }

  fetchItem(id: number): Promise<HnStories> {
    // without generics
    // const res = await fetchEx2(`${this.beseUrl}/item/${id}.json`);
    // const data = res as HnInterface;
    // return data;
    
    return fetchEx<HnStories>(`${this.beseUrl}/item/${id}.json`);
  }

  fetchComment(id: number): Promise<HnComments> {
    return fetchEx<HnComments>(`${this.beseUrl}/item/${id}.json`);
  }

  fetchComments(ids: number[]): Promise<HnComments[]> {
    const temp = ids.map( p => this.fetchComment(p));
    const res = Promise.all(temp);
    return res;
  }
}

// This is our utility function, we use generic 
// type to anotate what is the return type from
// the server (we assume that we are getting
// always the json response)
async function fetchEx<T>(address: string) {
  const response = await fetch(address);
  const data = await response.json() as T;
  return data;
}

// without generics
// async function fetchEx2(address: string) {
//   const response = await fetch(address);
//   const json = await response.json();
//   const data = JSON.parse(json);

//   return data;
// }

/////////////
// interface
////////////
export interface HnStories {
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