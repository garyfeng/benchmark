import React from 'react';
import { Box } from 'rebass';
import { MdRadioButtonUnchecked, MdRadioButtonChecked } from 'react-icons/md';

export default function Radio({ checked }) {
  return checked ? <MdRadioButtonChecked /> : <MdRadioButtonUnchecked />;
}
