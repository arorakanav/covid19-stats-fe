import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CovidSummaryPageComponent } from './covid-summary-page.component';

export const covidSummaryRoutes: Routes = [
  {
    path: '',
    component: CovidSummaryPageComponent,
  }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule,
    RouterModule.forChild(covidSummaryRoutes)
  ]
})
export class CoronavirusRoutingModule {
}