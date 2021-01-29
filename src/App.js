import React from 'react';
import { Provider } from 'react-redux';
import store from './lib/redux';

function App() {
  return (
    <Provider store={store}>
      <h1>Hi</h1>
    </Provider>
  );
}

export default App;
