import { render } from '@testing-library/react';
import React from 'react';

const Providers = ({ children }: { children?: React.ReactNode }) => {
  return <div>{children}</div>;
};

const customRender = (ui: React.ReactElement, options = {}) => render(ui, { wrapper: Providers, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
