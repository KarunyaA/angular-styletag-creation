import { ComponentFactory, ComponentFactoryResolver, ViewContainerRef, Injectable, OnDestroy } from '@angular/core';

@Injectable()
export class RenderEngineService implements OnDestroy {
  private rootViewContainer: ViewContainerRef;
  private componentFactory: ComponentFactory<any>;
  private componentReference;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  setRootViewContainerRef(view: ViewContainerRef): void {
    this.rootViewContainer = view;
  }

  createComponent(content, type) {
    this.componentFactory = this.componentFactoryResolver.resolveComponentFactory(type);
    this.componentReference = this.rootViewContainer.createComponent(this.componentFactory);
    this.componentReference.instance.contentOnCreate(content);
  }

  ngOnDestroy() {
    // Destroy components to avoide memory leaks
    this.componentReference.destroy();
  }
}
