import React from 'react';
import { render, screen } from '@testing-library/react';
import Overlay from './Overlay';

describe('Overlay tests', () => {
  test('check don\'t contains button when don\'t have children', () => {
    render(<Overlay onClose={() => true}>{}</Overlay>);
    const closeButton = screen.queryByRole('button');
    expect(closeButton).not.toBeInTheDocument();
  });

  test('check contains button with close when have children', () => {
    render(<Overlay onClose={() => true}>Anything</Overlay>);
    const closeButton = screen.getByRole('button');
    expect(closeButton.textContent).toMatch(/close/);
  });
});
