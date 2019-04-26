import { Component } from '@angular/core';
import { Heading } from '../../information.types';

@Component({
  selector: 'bw-information-heading',
  templateUrl: './heading.component.html'
})
export class HeadingComponent {
  public text: string;
  public type: string;

  contentOnCreate(values: Heading): void {
    this.text = values.text;
    this.type = values.type;
  }
}
