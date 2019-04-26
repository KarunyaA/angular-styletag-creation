import { Component } from '@angular/core';
import { LinkData } from '../../information.types';

@Component({
  selector: 'bw-information-link',
  templateUrl: './link.component.html'
})
export class LinkComponent {
  public text: string;
  public href: string;
  public target: string;

  contentOnCreate(values: LinkData): void {
    const linkData = values.data;
    this.href = linkData.url;
    this.target = linkData.target;
    this.text = values.text;
  }
}
