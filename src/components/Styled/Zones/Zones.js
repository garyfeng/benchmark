import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import { Box } from '../Base';

const ZonesContext = createContext({
  selected: [],
  onClear: () => {},
  onChange: () => {}
});

function useZonesContext() {
  const context = useContext(ZonesContext);
  if (!context) {
    throw new Error(
      `Choice compound components cannot be rendered outside the Zones component`
    );
  }
  return context;
}

function Zones({ id, children, onChange, onClear, selected }) {
  return (
    <ZonesContext.Provider value={{ selected, onClear, onChange }}>
      <Box id={id}>{children}</Box>
    </ZonesContext.Provider>
  );
}

export function ClearButton() {
  const { onClear } = useZonesContext();
  return (
    <Box pt="2">
      <Button variant="secondary" onClick={onClear}>
        Clear Answer
      </Button>
    </Box>
  );
}

export function Background({ width, height, label, src, children }) {
  const { onClear } = useZonesContext();
  return (
    <Box sx={{ display: 'block', position: 'relative' }}>
      <Box
        as="img"
        src={src}
        alt={label}
        style={{
          position: 'relative',
          width: width + 'px',
          height: height + 'px'
        }}
      />
      <Box
        as="svg"
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        sx={{
          position: 'absolute',
          left: 0,
          top: 0
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

export function Choice({ value, type, ...props }) {
  const normalStyle = {
    fill: 'p.500',
    fillOpacity: 0.4,
    ':focus': {
      outline: '2px dotted',
      outlineColor: 'black',
      outlineOffset: 1
    },
    ':hover': {
      fill: 'p.500',
      fillOpacity: 0.2,
      cursor: 'pointer'
    }
  };

  const selectedStyle = {
    stroke: 'p.500',
    strokeWidth: 3,
    strokeDasharray: 4,
    fill: 'p.500',
    fillOpacity: 0.2,
    ':hover': {
      fill: 'p.500',
      fillOpacity: 0.2,
      cursor: 'pointer'
    },
    ':focus': {
      outline: '2px dotted',
      outlineColor: 'black',
      outlineOffset: 1
    }
  };

  const { selected, onChange } = useZonesContext();
  const isSelected = value === selected;

  return (
    <Box
      as={type}
      key={value}
      tabIndex="0"
      onClick={() => onChange(value)}
      sx={isSelected ? selectedStyle : normalStyle}
      {...props}
    />
  );
}

Zones.Choice = Choice;
Zones.ClearButton = ClearButton;
Zones.Background = Background;

Zones.propTypes = {
  id: PropTypes.string,
  background: PropTypes.object,
  onSelect: PropTypes.func,
  selected: PropTypes.string
};

export default Zones;
