import { DebitCard } from 'src/app/interfaces/debit-card.interface';
import { Transaction } from './../../../interfaces/transaction.interface';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit {

  Transactions: Transaction[] | any[] = [];
  transactions: Transaction[] | any[] = [];
  debitCard: DebitCard | undefined;

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
    const status = window.sessionStorage.getItem('loggedIn');
    if (!status) {
      this.router.navigate(['auth/sign-in']);
    }
    this.debitCard = {
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
    }

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
