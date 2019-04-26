import { Component, OnInit, ViewChild, ViewContainerRef, Input, Inject } from '@angular/core';
import { RenderEngineService } from '../../service/render-engine.service';
import { CONTENT_MAPPINGS } from '../../constants';
import { ContentData, SectionData } from '../../information.types';

@Component({
  selector: 'bw-information-one-column-template',
  templateUrl: './one-column-template.component.html'
})
export class OneColumnTemplateComponent implements OnInit {
  @ViewChild('oneColumn', { read: ViewContainerRef }) view: ViewContainerRef;
  @Input() content: ContentData;
  public sections: SectionData[];

  constructor(private service: RenderEngineService, @Inject(CONTENT_MAPPINGS) private contentMappings: any) {}

  ngOnInit() {
    this.service.setRootViewContainerRef(this.view);
    this.content.areas.map(data => (this.sections = data.sections));
    this.sections.forEach(rjfBlock => {
      rjfBlock.rjf.forEach(response => {
        const type = this.contentMappings[response.type];
        this.service.createComponent(response, type);
      });
    });
  }
}
