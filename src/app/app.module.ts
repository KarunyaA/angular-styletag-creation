import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ContentComponentsModule } from './content-components/content-components.module';
import { TemplatesModule } from './templates/templates.module';

import { AppComponent } from './app.component';
import { GenerateInlineTagsService } from './service/generate-inline-tags.service';
import { RenderEngineService } from './service/render-engine.service';

@NgModule({
  imports: [BrowserModule, TemplatesModule, ContentComponentsModule],
  declarations: [AppComponent],
  providers: [RenderEngineService, GenerateInlineTagsService],

  bootstrap: [AppComponent]
})
export class AppModule { }
