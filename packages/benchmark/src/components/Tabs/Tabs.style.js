export default {
  tab: {
    border: '1',
    borderColor: 'n.600',
    borderBottom: '0',
    mt: '2',
    px: '3',
    py: '2',
    bg: 'n.50',
    ml: '-1px',
    ':focus': {
      outline: '1px dotted',
      outlineColor: 'black',
      outlineOffset: '-5px'
    },
    ':hover': {
      cursor: 'pointer',
      bg: 'white'
    },
    ':last-of-type': {
      borderTopRightRadius: 'lg',
      borderColor: 'n.600'
    },
    ':first-of-type': {
      borderTopLeftRadius: 'lg',
      borderColor: 'n.600'
    },
    '&[aria-selected=true]': {
      borderTopLeftRadius: 'lg',
      borderTopRightRadius: 'lg',
      bg: 'white',
      mt: 0,
      pt: 2,
      mb: '-1px',
      zIndex: '2'
    }
  }
};
