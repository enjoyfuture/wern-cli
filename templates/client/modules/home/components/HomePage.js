import React from 'react';
import {connect} from 'react-redux';

const Home = () => {
  return (
    <div>
      Home
    </div>
  );
};

function mapStateToProps(state, ownProps) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
