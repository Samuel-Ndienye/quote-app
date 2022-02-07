import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  @Input() quote!: Quotes;
  @Output() isComplete = new EventEmitter<boolean>();

  @Output() voteIncrease = new EventEmitter<boolean>();
  @Output() voteDecrease = new EventEmitter<boolean>();

  fnDecrease(two: boolean) {
    this.voteDecrease.emit(two);
  }

  fnIncrease(one: boolean) {
    this.voteIncrease.emit(one);
  }
  quoteDan(purge: boolean) {
    this.isComplete.emit(purge);
  }
  constructor() { }

  ngOnInit(){}

}
