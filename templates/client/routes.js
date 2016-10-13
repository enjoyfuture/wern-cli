import React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from './containers/App';

if (typeof require.ensure !== 'function') {
  require.ensure = function requireModule(deps, callback) {
    callback(require);
  };
}

// 注意嵌套路由应该是相对路径，不能写成据对路径
// 把 store 传入路由中，这样不同的路由可以根据 store 值来处理业务逻辑
/*eslint-disable react/jsx-no-bind*/
export default (store) => {
  return (
    <Route path="/" component={App}>
      <IndexRoute getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/home/components/HomePage').default);
        });
      }}/>
      <Route path="about" getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/about/components/AboutPage').default);
        });
      }}/>
    </Route>
  );
};
