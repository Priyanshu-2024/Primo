import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http: HttpClient) { }

  fetchAndEvaluateScript(url: string): Observable<any> {
    return this.http.get(url, { responseType: 'text' });
  }
}
