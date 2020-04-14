import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { ServerData } from './server_data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Test Web App';
  serverUrl = 'http://127.0.0.1:8080/';
  data: Observable<ServerData[]>;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.data = this.getTime();
    alert(this.data);
  }

  getTime(): Observable<ServerData[]> {
    return this.httpClient.get<ServerData[]>(this.serverUrl + 'time');
  }
}
