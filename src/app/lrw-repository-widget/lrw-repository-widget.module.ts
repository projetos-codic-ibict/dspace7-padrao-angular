import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LrwRepositoryWidgetComponent} from "./lrw-repository-widget.component";



@NgModule({
  declarations: [LrwRepositoryWidgetComponent],
  imports: [
    CommonModule
  ],exports: [
      LrwRepositoryWidgetComponent
  ]
})
export class LrwRepositoryWidgetModule { }
