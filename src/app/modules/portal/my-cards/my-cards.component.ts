import { DebitCard } from 'src/app/interfaces/debit-card.interface';
import { Transaction } from './../../../interfaces/transaction.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-cards',
  templateUrl: './my-cards.component.html',
  styleUrls: ['./my-cards.component.scss']
})
export class MyCardsComponent implements OnInit {

  Transactions: Transaction[] | any[] = [];
  transactions: Transaction[] | any[] = [];
  debitCards: DebitCard[] = [];
  constructor() { }

  ngOnInit(): void {
    this.debitCards = [
      {
        id: '001',
        cardNo: '2132 8732 2347 3478',
        balance: '15 0000',
        currency: 'UAH',
        cvv: '277',
        cardHolder: 'Chris Jombo',
        address: '19, Olubunmi Rotimi, Lekki, Lagos',
        zipCode: 23401,
        logo: 'assets/mastercard.svg',
        expiry: '07/20'
      },
      {
        id: '002',
        cardNo: '8346 5248 6232 7813',
        balance: '12 180',
        currency: 'USD',
        cvv: '277',
        cardHolder: 'Christy Jombo',
        address: '19, Olubunmi Rotimi, Lekki, Lagos',
        zipCode: 23401,
        logo: 'assets/visa.svg',
        expiry: '10/24'
      },
      {
        id: '003',
        cardNo: '5438 2343 0474 7324',
        balance: '8 305',
        currency: 'EUR',
        cvv: '277',
        cardHolder: 'Christian Jombo',
        address: '19, Olubunmi Rotimi, Lekki, Lagos',
        zipCode: 23401,
        logo: 'assets/payoneer.svg',
        expiry: '14/28'
      },
    ]
  }

}
