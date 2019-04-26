import { Component, ViewChild, ViewContainerRef, Inject, Renderer2, ElementRef } from '@angular/core';
import { GenerateInlineTagsService } from '../../service/generate-inline-tags.service';
import { RenderEngineService } from '../../service/render-engine.service';
import { CONTENT_MAPPINGS } from '../../constants';
import { RJFData } from '../../information.types';

@Component({
  selector: 'bw-information-paragraph',
  templateUrl: './paragraph.component.html'
})
export class ParagraphComponent {
  @ViewChild('embeddedView', { read: ViewContainerRef }) embeddedView: ViewContainerRef;
  @ViewChild('test') test: ElementRef;


  public text: string;
  public styleList = [];

  constructor(
    private renderEngineService: RenderEngineService,
    private inlineService: GenerateInlineTagsService,
    @Inject(CONTENT_MAPPINGS) private contentMappings: any,
    private renderer: Renderer2
  ) { }

  contentOnCreate(values: any): void {
    if (values.depth === 1 && (values.inlineEntityRanges.length > 0 || values.inlineStyleRanges.length > 0)) {
      this.renderEngineService.setRootViewContainerRef(this.embeddedView);
      const inlineComp = this.inlineService.getInlineView(values);
      inlineComp.forEach(obj => {
        const type = this.contentMappings[obj.type];
        this.renderEngineService.createComponent(obj, type);
      });
      if (values.inlineStyleRanges.length > 0) {
        values.inlineStyleRanges.forEach(styleItem => {
          const text = this.inlineService.getText(styleItem.offset, styleItem.length, values.text);
          const styledText = this.inlineService.getStyles(styleItem.style, text);
          this.styleList.push({ styleText: text, type: styledText })
        });
        // setTimeout(() => {
        //   this.styleList.forEach(styleItem => {
        //     console.log(this.test.nativeElement.innerHTML)
        //     this.renderer.setProperty(this.test.nativeElement, 'innerHTML', this.test.nativeElement.innerHTML.replace(styleItem.styleText, styleItem.type));
        //   });

        // }, 1000);
        setTimeout(() => {
          console.log(this.test.nativeElement);
          this.styleList.forEach(styleItem => {
            const elements = this.test.nativeElement.getElementsByTagName('bw-information-plain-text')
            for (var i = 0; i < elements.length; i++) {
              this.renderer.setProperty(elements[i], 'innerHTML',
                elements[i].innerHTML.replace(styleItem.styleText, styleItem.type));
            }
          });
        }, 1000);
      }
    } else {
      this.text = values.text;
    }
  }
}


