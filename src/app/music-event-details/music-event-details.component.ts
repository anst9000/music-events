import { Component, OnInit } from '@angular/core';
import { MusicEvent } from '../MusicEvent';
import { MusicEventService } from '../music-event.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-music-event-details',
  templateUrl: './music-event-details.component.html',
  styleUrls: ['./music-event-details.component.scss']
})
export class MusicEventDetailsComponent implements OnInit {
  event: MusicEvent;

  constructor(
    private musicEventService: MusicEventService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.event = this.musicEventService.GetMusicEvent(+params.get('id'));
    });
  }
}
