import { Component, Input } from '@angular/core';
import { reduce } from 'lodash';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'coivd-summary-deaths',
  templateUrl: './covid-summary-deaths.component.html',
  styleUrls: ['./covid-summary-deaths.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CovidSummaryDeadComponent {

  @Input() deadCases: any;

  public chartOptions = {
    hAxis: { textPosition: 'none' }
  };

  public chartType = "Line"
  public chartColumns = ['Date', 'Deaths', {type: 'string',role: 'tooltip'}]
  

  public get chartData() {
    let parsedData = []
    parsedData = reduce(this.deadCases, (result = [], value, key) => {
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
    
    let result = this.deadCases && this.deadCases !== {};
    console.log('here', result);
    return result
  }
}
