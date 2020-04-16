import { Component, Input } from '@angular/core';
import { reduce } from 'lodash';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'coivd-summary-confirmed',
  templateUrl: './covid-summary-confirmed.component.html',
  styleUrls: ['./covid-summary-confirmed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CovidSummaryConfirmedComponent {

  @Input() confirmedCases: any;

  public chartOptions = {
    hAxis: { textPosition: 'none' }
  };

  public chartType = "Line"
  public chartColumns = ['Date', 'Confirmed', {type: 'string',role: 'tooltip'}]
  

  public get chartData() {
    let parsedData = []
    parsedData = reduce(this.confirmedCases, (result = [], value, key) => {
      let item = reduce(value, (res = [], val, k) => {
        let date = new Date(key)
        if (k == 'Canada')
        {
          res.push([date, val, k]);
        }
        return res;
      }, [])
      result.push(...item)
      return result;
    }, [])    
    return parsedData
  }

  public get hasData(): boolean {
    let result = this.confirmedCases && this.confirmedCases !== {};
    return result
  }
}
