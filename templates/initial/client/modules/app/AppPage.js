import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classNames from 'classnames/bind';
import Nav from './components/Nav'
import * as appAction from './action';
import styles from './scss/main';

const cx = classNames.bind(styles);

class App extends Component {

  static propTypes = {
    children: PropTypes.node,
    location: PropTypes.object,
    toast: PropTypes.object,
    appAction: PropTypes.object,
  };

  componentDidUpdate() {
    const {
      toast, appAction
    } = this.props;

    if (toast && toast.get('effect') === 'enter') {
      if (this.toastTimeoutId) {
        clearTimeout(this.toastTimeoutId);
      }
      this.toastTimeoutId = setTimeout(() => {
        appAction.clearToast();
        this.toastTimeoutId = null;
      }, 3000);
    }
  }

  // toast 组件
  renderToast() {
    const {
      toast
    } = this.props;
    const content = toast.get('content');
    const effect = toast.get('effect');

    return (
      <div className={cx('toast-panel', 'flex', 'flex-items-center', 'flex-items-middle', effect || '')}>
        <div className={cx('toast')}>{content}</div>
      </div>
    );
  }

  render() {
    const {
      children, location, appAction
    } = this.props;

    return (
      <div className={cx('main')}>
        {this.renderToast()}
        <Nav />
        {children && React.cloneElement(children, {
          key: location.pathname,
          appAction
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    toast: state.get('toast')
  };
}

function mapDispatchToProps(dispatch) {
  return {
    appAction: bindActionCreators(appAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
