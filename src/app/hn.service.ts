import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HnService {


  beseUrl: string;

  constructor(private _http: HttpClient) { }
}
