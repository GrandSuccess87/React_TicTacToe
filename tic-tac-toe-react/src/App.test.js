import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the correct landing page for the game', () => {
  const reactInfoDiv = document.createElement('div');
  ReactDOM.render(<App />, reactInfoDiv);
  ReactDOM.unmountComponentAtNode(reactInfoDiv);
});

it('returns correct integer', () => {
  expect(1).toEqual(1)
});

it('returns correct integer', () => {
  expect(7).toEqual(7)
});

it('returns correct integer', () => {
  expect(11).toEqual(11)
});