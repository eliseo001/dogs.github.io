import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import { shallow } from 'enzyme'; 

test('renders button', () => {
  const { getByText } = render(<App />);
  const startButton = getByText(/START/i);
  expect(startButton).toBeInTheDocument();
});
test('renders title', () => {
    const { getByText } = render(<App />);
    const dogsTitle = getByText(/DOGS-Api/i);
    expect(dogsTitle).toBeInTheDocument();
  });
  

