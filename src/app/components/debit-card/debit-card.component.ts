import { Component, Input, OnInit } from '@angular/core';
import { DebitCard } from 'src/app/interfaces/debit-card.interface';

@Component({
  selector: 'app-debit-card',
  templateUrl: './debit-card.component.html',
  styleUrls: ['./debit-card.component.scss']
})
export class DebitCardComponent implements OnInit {

  @Input() debitCardInfo: DebitCard | undefined;
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    // do something
    // route with card data
  }

}
