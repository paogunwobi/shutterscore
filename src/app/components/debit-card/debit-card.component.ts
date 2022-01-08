import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DebitCard } from 'src/app/interfaces/debit-card.interface';

@Component({
  selector: 'app-debit-card',
  templateUrl: './debit-card.component.html',
  styleUrls: ['./debit-card.component.scss']
})
export class DebitCardComponent implements OnInit {

  @Input() debitCardInfo: DebitCard | undefined;
  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  onClick() {
    this.router.navigate([`/card-detail`]);
    // do something
    // route with card data
  }

}
