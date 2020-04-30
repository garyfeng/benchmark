export default {
  tab: {
    // A border must be applied to the left and right as
    // both sides will be visible when the tab is selected.
    // We then apply a negative margin hack to prevent the
    // doubling up of borders between tabs.
    border: '2',
    borderColor: 'n.400',
    borderBottom: '0',
    ml: '-2px',

    // Add a margin to the top for non-selected tabs.
    // Selected tabs have no margin.
    mt: '2',

    px: '3',
    py: '2',
    bg: 'n.25',
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
      borderTopRightRadius: 'lg'
    },
    ':first-of-type': {
      borderTopLeftRadius: 'lg'
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
