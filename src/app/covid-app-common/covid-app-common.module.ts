import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
  ],
  imports: [
    HttpClientModule,
    CommonModule,
  ],
  exports: [CommonModule],
})
export class CovidAppCommponModule { }
