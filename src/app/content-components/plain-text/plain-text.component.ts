import { Component } from '@angular/core';

@Component({
  selector: 'bw-information-plain-text',
  templateUrl: './plain-text.component.html'
})
export class PlainTextComponent {
  public text: string;
  contentOnCreate(values: { data: string }): void {
    this.text = values.data;
  }
}
