import React, { useState } from 'react';
import Zones, { Zone, ZonesBackground } from './Zones';
import imageFile from './examples/example01.svg';

export default {
  title: 'Item Types/Zones',
  component: Zones
};

export function Circles() {
  const [selected, setSelected] = useState();

  return (
    <Zones
      selected={selected}
      onChange={setSelected}
      onClear={() => setSelected()}
    >
      <ZonesBackground width="301" height="301" src={imageFile}>
        <Zone type="circle" value="a" cx="100" cy="100" r="22" />
        <Zone type="circle" value="b" cx="200" cy="100" r="22" />
        <Zones type="circle" value="c" cx="100" cy="200" r="22" />
        <Zones type="circle" value="d" cx="200" cy="200" r="22" />
      </ZonesBackground>
    </Zones>
  );
}

export function Rectangles() {
  const [selected, setSelected] = useState();

  return (
    <Zones
      selected={selected}
      onChange={setSelected}
      onClear={() => setSelected()}
    >
      <ZonesBackground width="610" height="250">
        <Zone type="rect" value="a" x="10" y="10" width="190" height="110" />
        <Zone type="rect" value="b" x="210" y="10" width="190" height="110" />
        <Zone type="rect" value="c" x="410" y="10" width="190" height="110" />
        <Zone type="rect" value="d" x="10" y="128" width="190" height="110" />

        <Zone type="rect" value="e" x="210" y="128" width="190" height="110" />
        <Zone type="rect" value="f" x="410" y="128" width="190" height="110" />
      </ZonesBackground>
    </Zones>
  );
}
