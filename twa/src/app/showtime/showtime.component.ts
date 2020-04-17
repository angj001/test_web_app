import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-showtime',
  templateUrl: './showtime.component.html',
  styleUrls: ['./showtime.component.css']
})
export class ShowtimeComponent implements OnInit {
  time_now = 'unknown';

  constructor(private backend: BackendService) { }

  ngOnInit(): void {
    this.backend.getCurrentTime().subscribe( data => this.time_now = data );
  }

  updateTime(): void {
    this.backend.getCurrentTime().subscribe( data => this.time_now = data );
  }
}
