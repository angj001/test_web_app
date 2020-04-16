import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private timeUrl = 'http://127.0.0.1:8080/time';

  constructor(private http: HttpClient) { }

  getCurrentTime(): Observable<string> {
    return this.http.get<string>(this.timeUrl);
  }
}
