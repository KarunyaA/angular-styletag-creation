export const MOCK = {
  metadata: {
    type: 'single-column'
  },
  data: [
    {
      areas: [
        {
          sections: [
            {
              rjf: [
                {
                  type: 'heading-1',
                  depth: 0,
                  text: 'This is Heading',
                  inlineStyleRanges: [],
                  inlineEntityRanges: []
                },
                {
                  type: 'paragraph',
                  depth: 1,
                  text: 'Do you have questions or comments and do you wish to contact ABC? Please visit our customer support page.',
                  inlineStyleRanges: [{
                    style: 'BOLD',
                    offset: 0,
                    length: 6
                  },
                  {
                    style: 'ITALIC',
                    offset: 0,
                    length: 6
                  }],
                  inlineEntityRanges: [
                    {
                      type: 'LINK',
                      offset: 83,
                      length: 16,
                      data: {
                        target: '_self',
                        url: '/index.htm'
                      }
                    }
                  ]
                },
                {
                  type: 'paragraph',
                  depth: 1,
                  text: 'This is paragraph',
                  inlineStyleRanges: [{
                    style: 'ITALIC',
                    offset: 0,
                    length: 6
                  }],
                  inlineEntityRanges: []
                },
                                {
                  type: 'paragraph',
                  depth: 1,
                  text: 'This is second paragraph',
                  inlineStyleRanges: [{
                    style: 'ITALIC',
                    offset: 0,
                    length: 6
                  }],
                  inlineEntityRanges: []
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};