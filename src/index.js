import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import { SearchProvider } from './context/searchContext';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading = "null" persistor={persistor}>
      <SearchProvider>
        <App />
      </SearchProvider>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
