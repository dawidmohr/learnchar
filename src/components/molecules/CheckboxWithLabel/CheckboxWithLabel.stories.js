import React from 'react';
import { storiesOf } from '@storybook/react';
import CheckboxWithLabel from './CheckboxWithLabel';

storiesOf('CheckboxWithLabel', module).add('Normal', () => (
  <CheckboxWithLabel
    label="Testowy label"
    checked="false"
/>
));
