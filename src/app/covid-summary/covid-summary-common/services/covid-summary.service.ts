import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CovidSummaryService {

  constructor(private http: HttpClient) { }

  public getConfirmedCases(): Observable<urlData>{
    let url = "https://dataprogramming03group13-covid.herokuapp.com/covidapp/time_series_confirmed_global";
    return this.http.get<urlData>(url)
    .pipe(map(({data}) => data));
  }

  public getDeaths(): Observable<urlData>{
    let url = "https://dataprogramming03group13-covid.herokuapp.com/covidapp/time_series_deaths_global";
    return this.http.get<urlData>(url)
    .pipe(map(({data}) => data));
  }

  public getRecovered(): Observable<urlData>{
    let url = "https://dataprogramming03group13-covid.herokuapp.com/covidapp/time_series_recovered_global";
    return this.http.get<urlData>(url)
    .pipe(map(({data}) => data));
  }
}

interface urlData {
  'success': string;
  'message': string;
  'data'?
}