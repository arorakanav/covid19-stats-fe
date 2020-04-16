import { Component, Input } from '@angular/core';
import { reduce } from 'lodash';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'coivd-summary-recovered',
  templateUrl: './covid-summary-recovered.component.html',
  styleUrls: ['./covid-summary-recovered.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CovidSummaryRecoveredComponent {

  @Input() recoveredCases: any;

  public chartOptions = {
    hAxis: { textPosition: 'none' }
  };

  public chartType = "Line"
  public chartColumns = ['Date', 'Recovered', {type: 'string',role: 'tooltip'}]
  

  public get chartData() {
    let parsedData = []
    parsedData = reduce(this.recoveredCases, (result = [], value, key) => {
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
    let result = this.recoveredCases && this.recoveredCases !== {};
    return result
  }
}
