export interface ContentData {
  areas: [AreasData];
}

export interface AreasData {
  sections: [SectionData];
}

export interface SectionData {
  rjf: [RJFData];
}

export interface RJFData {
  depth: number | null;
  inlineEntityRanges?: [EntityData] | [];
  inlineStyleRanges?: [StyleData] | [];
  text: string | null;
  type: string | null;
}

export interface EntityData {
  data: Target | null;
  length: number | null;
  offset: number | null;
  type: string | null;
}

export interface Target {
  target?: string;
  url?: string;
}

export interface StyleData {
  length?: number;
  offset?: number;
  type?: string;
}

export interface LinkData {
  data?: Target;
  text?: string;
}

export interface Heading {
  type?: string;
  text?: string;
}
