import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DebitCardComponent } from './../components/debit-card/debit-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    DebitCardComponent,
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
