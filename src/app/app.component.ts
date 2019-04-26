import { Component, OnInit, OnDestroy } from '@angular/core';
import { InformationService } from './service/information.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ContentData } from './information.types';
import { InformationConstant } from './constants';
import { MOCK } from './mocks/mock';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public resourceURI: string;
  public templateType: string;
  public content: any;
  private unsubscribe$ = new Subject();

  constructor(
  ) {}

  ngOnInit() {
      this.getCRSContentData('copyrights');
  }

  public getCRSContentData(resourceURI: string) {
this.templateType = MOCK.metadata.type;
this.content = MOCK.data.reduce((data, index) => data.areas[index]);

  }
}

