import { Component, Input } from '@angular/core';
import { map, orderBy } from 'lodash';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'coivd-summary-table',
  templateUrl: './covid-summary-table.component.html',
  styleUrls: ['./covid-summary-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CovidSummaryTableComponent {

  @Input() globalSummary: any;

  public get globalSummaryData() {
    return this.globalSummary;
  }

  public get orderedData() {
    let res = orderBy(this.globalSummary, ['confirmed'], ['desc'])
    return res;
  }
  public get hasData(): boolean {
    let result = this.globalSummary && this.globalSummary !== {}
    return result
  }
}
