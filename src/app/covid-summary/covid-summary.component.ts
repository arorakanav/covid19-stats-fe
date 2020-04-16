import { Component, Input } from '@angular/core';

@Component({
  selector: 'coivd-summary',
  templateUrl: './covid-summary.component.html',
  styleUrls: ['./covid-summary.component.scss']
})
export class  CovidSummaryComponent {
  @Input() confirmedCases: any;
  @Input() deadCases: any;
  @Input() recoveredCases: any;
  @Input() globalSummary: any;
  @Input() globalGeoSummary: any;
}
