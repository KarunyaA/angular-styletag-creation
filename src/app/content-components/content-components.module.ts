import { NgModule, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadingComponent } from './heading/heading.component';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { CONTENT_MAPPINGS } from '../constants';
import { PlainTextComponent } from './plain-text/plain-text.component';
import { LinkComponent } from './link/link.component';

export const CONTENT_COMPONENTS = [HeadingComponent, ParagraphComponent, PlainTextComponent, LinkComponent];

export const CONTENT_MAPPINGS_PROVIDER: Provider = [
  {
    provide: CONTENT_MAPPINGS,
    useValue: {
      'heading-1': HeadingComponent,
      'heading-2': HeadingComponent,
      'heading-3': HeadingComponent,
      'heading-4': HeadingComponent,
      'heading-5': HeadingComponent,
      'heading-6': HeadingComponent,
      'paragraph': ParagraphComponent,
      'LINK': LinkComponent,
      'TEXT': PlainTextComponent,
    }
  }
];

@NgModule({
  imports: [CommonModule],
  declarations: [...CONTENT_COMPONENTS],
  entryComponents: [...CONTENT_COMPONENTS],
  providers: [...CONTENT_MAPPINGS_PROVIDER]
})
export class ContentComponentsModule {}
