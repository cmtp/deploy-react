import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import Timer from './Pomodoro/Timer';

test('Renders App Component without crashing', () => {
  const { getByText } = render(<Router><App><Timer /></App></Router>);
  const linkElement = getByText(/Start Working/i);
  expect(linkElement).toBeInTheDocument();
});
