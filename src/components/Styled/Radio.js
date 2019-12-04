import React from 'react';
import { MdRadioButtonUnchecked, MdRadioButtonChecked } from 'react-icons/md';

export default function Radio({ checked }) {
  return checked ? <MdRadioButtonChecked /> : <MdRadioButtonUnchecked />;
}
