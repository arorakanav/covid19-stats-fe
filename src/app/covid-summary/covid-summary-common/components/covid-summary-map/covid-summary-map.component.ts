import { Component, Input } from '@angular/core';
import { reduce } from 'lodash';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'coivd-summary-map',
  templateUrl: './covid-summary-map.component.html',
  styleUrls: ['./covid-summary-map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CovidSummaryMapComponent {

  @Input() globalGeoSummary: any;

  public chartOptions = {
    hAxis: { textPosition: 'none' }
  };

  public chartType = "GeoChart"
  // public chartColumns = [{label: 'Lat', type: 'number'},
  //   {label: 'Long', type: 'number'},
  //   {label: 'Recovered', type: 'string', role: 'tooltip'},
  //   {label: 'Confirmed', type: 'string', role: 'tooltip'},
  //   {label: 'Deaths', type: 'string', role: 'tooltip'}]
  
  public chartColumns = [{label: 'Lat', type: 'number'},
    {label: 'Long', type: 'number'},
    // {label: 'Recovered', type: 'string', role: 'tooltip'},
    {label: 'Confirmed', type: 'number', role: 'tooltip'}]
    // {label: 'Deaths', type: 'string', role: 'tooltip'}]

  public get chartData() {
    return this.globalGeoSummary
  }

  public get hasData(): boolean {
    let result = this.globalGeoSummary && this.globalGeoSummary.length > 0;
    return result
  }
}
