import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import { Box } from '../Base';

function Zones({ id, background, zones, selected, onClear, onSelect }) {
  const { width, height, label, src } = background;

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

  return (
    <Box id={id} sx={{ display: 'block', position: 'relative' }}>
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
        {zones.map(zone => {
          let { optionId } = zone;
          let isSelected = optionId === selected;
          return (
            <Box
              as={zone.type}
              key={optionId}
              zone={zone}
              tabIndex="0"
              onClick={() => onSelect(optionId)}
              sx={isSelected ? selectedStyle : normalStyle}
              {...zone.attributes}
            />
          );
        })}
      </Box>
      <Box pt="2">
        <Button variant="secondary" onClick={onClear}>
          Clear Answer
        </Button>
      </Box>
    </Box>
  );
}

Zones.propTypes = {
  id: PropTypes.string,
  background: PropTypes.object,
  zones: PropTypes.array,
  onSelect: PropTypes.func,
  selected: PropTypes.string
};

export default Zones;
