import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery/dist/jquery.min.js';

@Component({
  selector: 'app-aktuelno1',
  templateUrl: './aktuelno1.component.html',
  styleUrls: ['./aktuelno1.component.css']
})
export class Aktuelno1Component implements OnInit {
  constructor() {}

  ngOnInit(): void {
    $('#iot').hover(
      () => {
        // changed selector '.design' to '#container'
        $('.iotSlika').animate(
          {
            opacity: '1',
          },
          1000
        );
      },
      () => {
        $('.iotSlika').animate(
          {
            opacity: '0',
          },
          1000
        );
      }
    );
  }
}
