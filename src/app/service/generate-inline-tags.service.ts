import { Injectable } from '@angular/core';
import { RJFData } from '../information.types';
import { InformationConstant } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class GenerateInlineTagsService {
  public text: string;
  public marker = '||||';

  breakByRanges(ranges: any, text: string, tempString: string) {
    const result = [];
    ranges.forEach(rjfBlock => {
      const { offset, length, type } = rjfBlock;
      const offsetText = text.slice(offset, offset + length + 1);
      tempString = tempString.replace(offsetText, this.marker);
      result.push({ text: offsetText, type, data: rjfBlock.data });
    });

    return { result, tempString };
  }

  getInlineView(content: RJFData) {
    const { inlineEntityRanges, text } = content;
    const result = [];
    let tempText = text;

    const { result: entityResult, tempString: entityTempText } = this.breakByRanges(inlineEntityRanges, text, tempText);
    tempText = entityTempText;
    result.push(...entityResult);

    let orderNumber = 0;
    const textItems = tempText.split(this.marker).map((data, index) => {
      if (result[index]) {
        result[index].order = orderNumber + index + 1;
      }
      const resultData = { data, type: InformationConstant.TEXT, order: orderNumber + index };
      orderNumber += 1;
      return resultData;
    });
    result.push(...textItems);
    return result
      .sort((first, second) => first.order - second.order)
      .map(item => ({
        data: item.data,
        type: item.type,
        text: item.text || ''
      }));
  }

  getText(offset, length, text: string) {
    return text.substr(offset, length);
  }

  getStyles(type: string, text: string): string {
    switch (type) {
      case 'BOLD': return `<b class="bw-information-strong">${text}</b>`;
      case 'ITALIC': return `<i class="bw-information-italic">${text}</i>`;
    }
  }
}
