import React from 'react';
import ReactDOM from 'react-dom';
import moxios from 'moxios';
import App from './App';

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{ name: 'Fetched #1' }, { name: 'Fetched #2' }]
  })
});

afterEach(() => {
  moxios.uninstall();
});
