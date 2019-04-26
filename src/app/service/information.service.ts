import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {MOCK} from '../mocks/mock';
@Injectable({
  providedIn: 'root'
})
export class InformationService {
  constructor() {}

  getCrsContent(resourceURI: string) {
    return MOCK;
  }
}
