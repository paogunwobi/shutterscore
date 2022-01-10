import { BrowserModule } from '@angular/platform-browser';
import { SpinnerComponent } from './../components/spinner/spinner.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DebitCardComponent } from './../components/debit-card/debit-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
// import { MDBBootstrapModule } from 'angular-bootstrap-md';
// import { CarouselModule, WavesModule } from 'angular-bootstrap-md'


@NgModule({
  declarations: [
    DebitCardComponent,
    SpinnerComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    // BrowserModule,
    NgbCarouselModule,
    // MDBBootstrapModule.forRoot(),
  ],
  exports: [
    RouterModule,
    CommonModule,
    FormsModule,
    DebitCardComponent,
    // BrowserModule,
    NgbCarouselModule,
  ],
  schemas: []
})
export class SharedModule { }
