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
  
  public chartColumns = [{label: 'Country', type: 'string'},
    {label: 'Confirmed', type: 'number'}]

  public get chartData() {
    return this.globalGeoSummary
  }

  public get hasData(): boolean {
    let result = this.globalGeoSummary && this.globalGeoSummary.length > 0;
    return result
  }
}
