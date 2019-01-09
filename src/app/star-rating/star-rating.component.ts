import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent {
currentRate=5;
@Output() rateChanges: EventEmitter<any> = new EventEmitter();

onRateChanges($event)
{
  this.rateChanges.next($event);
}
}
