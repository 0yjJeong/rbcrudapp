import React from 'react';
import { render, screen } from '@testing-library/react';

import { Admin } from './';

describe('Admin', () => {
  it('should render', () => {
    render(<Admin>{/* <>Hello, world</> */}</Admin>);
    // expect(screen.getByText(/Hello, world/)).toBeInTheDocument();
  });
});
