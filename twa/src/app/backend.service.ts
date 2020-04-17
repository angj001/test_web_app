import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private timeUrl = environment.baseUrl + 'time';

  constructor(private http: HttpClient) { }

  getCurrentTime(): Observable<string> {
    return this.http.get<string>(this.timeUrl);
  }
}

