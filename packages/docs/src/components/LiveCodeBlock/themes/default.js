// based on the theme-ui theme
export default {
  plain: {
    color: '#000000',
    backgroundColor: '#f6f8fa',
  },
  styles: [
    {
      types: [
        'comment',
        'prolog',
        'doctype',
        'cdata',
        'punctuation',
        'operator',
        'entity',
        'url',
      ],
      style: {
        color: '#777777',
      },
    },
    { types: ['comment'], style: { fontStyle: 'italic' } },
    {
      types: [
        'property',
        'tag',
        'boolean',
        'number',
        'constant',
        'symbol',
        'deleted',
        'function',
        'class-name',
        'regex',
        'important',
        'variable',
      ],
      style: {
        color: '#660099',
      },
    },
    {
      types: ['atrule', 'attr-value', 'keyword'],
      style: { color: '#3333ee' },
    },
    {
      types: ['selector', 'attr-name', 'string', 'char', 'builtin', 'inserted'],
      style: { color: '#111199' },
    },
  ],
};
