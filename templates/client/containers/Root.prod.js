import React, {PropTypes} from 'react';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux'
import Immutable from 'immutable';
import createRoutes from '../routes';
import configureStore from '../store'
import createSelectLocationState from '../helper/createSelectLocationState';

// 路由转换配置
// Read more https://github.com/rackt/react-router/blob/latest/docs/Glossary.md#routeconfig

const store = configureStore(browserHistory, Immutable.fromJS({}));
const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: createSelectLocationState()
});

const Root = () => {
  const routes = createRoutes(store);
  return (
    <Provider store={store}>
      <Router history={history}>
        {routes}
      </Router>
    </Provider>
  );
};

export default Root;
