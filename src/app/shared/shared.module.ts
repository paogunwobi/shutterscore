import { SpinnerComponent } from './../components/spinner/spinner.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DebitCardComponent } from './../components/debit-card/debit-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../components/navbar/navbar.component';



@NgModule({
  declarations: [
    DebitCardComponent,
    NavbarComponent,
    SpinnerComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
  ],
  exports: [
    RouterModule,
    CommonModule,
    FormsModule,
    DebitCardComponent,
  ]
})
export class SharedModule { }
