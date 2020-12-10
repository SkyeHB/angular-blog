import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { callbackify } from 'util';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.css'],
})
export class PagingComponent implements OnInit {
  constructor() {}

  @Input() page: number;
  @Output() newPage = new EventEmitter();

  ngOnInit(): void {}

  pageBack() {
    if (this.page > 1) {
      this.newPage.emit(this.page - 1);
    }
  }

  pageFwd() {
      this.newPage.emit(this.page + 1);
  }
}
