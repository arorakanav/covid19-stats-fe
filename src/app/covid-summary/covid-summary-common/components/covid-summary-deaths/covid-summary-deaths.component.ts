import { Component, Input } from '@angular/core';
import { reduce } from 'lodash';
import { ChangeDetectionStrategy } from '@angular/compiler/src/core';

@Component({
  selector: 'coivd-summary-deaths',
  templateUrl: './covid-summary-deaths.component.html',
  styleUrls: ['./covid-summary-deaths.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CovidSummaryDeadComponent {

  @Input() deadCases: any[];

  public chartType = "Line"
  public chartColumns = ['Date', 'Country', 'Deaths']

  public get chartData() {
    let parsedData = []
    parsedData = reduce(this.deadCases, (result = [], value, key) => {
      let item = reduce(value, (res = [], val, k) => {
        res.push([key, k, val]);
        return res;
      }, [])
      result.push(...item)
      return result;
    }, [])
    console.log(parsedData)
    return parsedData
  }

  public get hasData(): boolean {
    let result = this.deadCases && this.deadCases.length > 0;
    return result
  }
}
