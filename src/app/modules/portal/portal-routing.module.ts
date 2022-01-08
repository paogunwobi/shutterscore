import { CardDetailsComponent } from './card-details/card-details.component';
import { MyCardsComponent } from './my-cards/my-cards.component';
import { DashboardComponent } from './../portal/dashboard/dashboard.component';
import { IndexComponent } from './index/index.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: { breadcrumb: "Dashboard"},
      },
      {
        path: 'my-cards',
        component: MyCardsComponent,
        data: { breadcrumb: "My Cards" },
      },
      {
        // path: 'card-detail/:id',
        path: 'card-detail',
        component: CardDetailsComponent,
        data: { breadcrumb: "Card Details" },
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalRoutingModule { }
