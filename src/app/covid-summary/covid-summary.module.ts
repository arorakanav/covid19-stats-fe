import { NgModule } from '@angular/core';
import { GoogleChartsModule } from 'angular-google-charts';

import { CoronavirusRoutingModule } from './covid-summary-routing.module'

import { CovidAppCommponModule } from '../covid-app-common'
import { CovidSummaryService } from './covid-summary-common/services/covid-summary.service';
import { CovidSummaryPageComponent } from './covid-summary-page.component';
import { CovidSummaryComponent } from './covid-summary.component'
import { COVID_SUMMARY_COMPONENTS } from './covid-summary-common/components'

@NgModule({
  declarations: [
    CovidSummaryPageComponent,
    CovidSummaryComponent,
    ...COVID_SUMMARY_COMPONENTS
  ],
  imports: [
    CovidAppCommponModule,
    CoronavirusRoutingModule,
    GoogleChartsModule.forRoot(),
  ],
  providers: [CovidSummaryService],
  exports: [
    CovidSummaryPageComponent,
    CovidSummaryComponent,
    GoogleChartsModule,
  ]
})
export class CovidSummaryModule { }
