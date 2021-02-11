import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'calculator',
        loadChildren: '../calculator/calculator.module#CalculatorPageModule'
      },
      {
        path: 'about',
        loadChildren: '../about/about.module#AboutPageModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/calculator'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
