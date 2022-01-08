import { SharedModule } from './../../shared/shared.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalRoutingModule } from './portal-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IndexComponent } from './index/index.component';
import { MyCardsComponent } from './my-cards/my-cards.component';
import { CardDetailsComponent } from './card-details/card-details.component';


@NgModule({
  declarations: [
    DashboardComponent,
    IndexComponent,
    MyCardsComponent,
    CardDetailsComponent
  ],
  imports: [
    CommonModule,
    PortalRoutingModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class PortalModule { }
