import React from 'react';
import { render } from 'react-dom';
import { Provider }  from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Layout from './components/Layout';
import store from './store';

injectTapEventPlugin();

render(
  <Provider store={store}>
    <Layout/>
  </Provider>,
  document.getElementById('root')
);
