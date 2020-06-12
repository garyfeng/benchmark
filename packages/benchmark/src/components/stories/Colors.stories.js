import React from 'react';
import { AllTags } from '../Tag/examples';
import { Basic as AllAlerts } from '../Alert/Alert.stories';

export default {
  title: 'Collections'
};

export function SemanticColors() {
  return (
    <>
      <AllTags />
      <AllAlerts />
    </>
  );
}
