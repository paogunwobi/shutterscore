import { DebitCard } from 'src/app/interfaces/debit-card.interface';
import { Transaction } from './../../../interfaces/transaction.interface';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  debitCardInfo: DebitCard | undefined;
  debitCards: DebitCard[] = [];
  Transactions: Transaction[] | any[] = [];
  transactions: Transaction[] | any[] = [];
  loading: boolean | undefined;

  constructor(
    public router: Router
  ) { }

  async ngOnInit(): Promise<void> {
    const status = window.sessionStorage.getItem('loggedIn');
    if (!status) {
      this.router.navigate(['auth/sign-in']);
    }

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
    ];

    this.transactions = [
      {
        id: '0001',
        title: '”Food & Drinks” restaurant',
        description: 'Cafe and restaurants    Card: ** 3478',
        amount: -480,
        status: 'completed',
        currency: 'UAH',
        createdAt: '',
        updatedAt: '',
      },
      {
        id: '0002',
        title: '”Walmart” store (Main Str. 13)',
        description: 'Groceries & food     Card: ** 7813',
        amount: -80,
        status: 'completed',
        currency: 'USD',
        createdAt: '',
        updatedAt: '',
      },
      {
        id: '0003',
        title: 'Transfer from Alexey',
        description: 'Transactions    To card: ** 3478',
        amount: 6000,
        status: 'completed',
        currency: 'UAH',
        createdAt: '',
        updatedAt: '',
      }
    ]
  }


}
