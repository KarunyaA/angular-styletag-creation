import { InjectionToken } from '@angular/core';

export class InformationConstant {
  public static LINK = 'LINK';
  public static TEXT = 'TEXT';
  public static HEADING_1 = 'heading-1';
  public static HEADING_2 = 'heading-2';
  public static HEADING_3 = 'heading-3';
  public static HEADING_4 = 'heading-4';
  public static HEADING_5 = 'heading-5';
  public static HEADING_6 = 'heading-6';
  public static PARAGRAPH = 'paragraph';
  public static STRONG = 'BOLD';
}

export const CONTENT_MAPPINGS = new InjectionToken<any>(`CONTENT_MAPPINGS`);
