import { Component, Input } from '@angular/core';

@Component({
  selector: '[coivd-summary-table-rows]',
  templateUrl: './covid-summary-table-rows.component.html',
  styleUrls: ['./covid-summary-table-rows.component.scss']
})
export class  CovidSummaryTableRowsComponent {
  @Input() item: any;

  public itemDAta() {
    console.log(this.item)
  }
}
