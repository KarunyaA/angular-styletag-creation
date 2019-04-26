import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneColumnTemplateComponent } from './one-column-template/one-column-template.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OneColumnTemplateComponent],
  exports: [OneColumnTemplateComponent]

})
export class TemplatesModule { }