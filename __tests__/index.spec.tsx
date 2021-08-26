import React from 'react';
import { render } from '../test-utils';
import Index from '../src/pages/index';

test('renders loading and results', async () => {
  const { getByText } = render(<Index />);
  getByText(/diego/);
});
