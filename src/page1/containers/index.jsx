import React, { Component } from 'react';
import { connect, bindActionCreators } from 'react-redux';
import * as actions from '../actions';

class App extends React.Component {
  render() {
    console.log('rendeer', this.props);
    return (
      <div>
        <p>Welcome react the count is {this.props.count}</p>
        <button onClick={() => {
          const { dispatch } = this.props;
          dispatch(actions.add());
        }}>加一</button>
      </div>
    );
  }
}

export default connect((state) => {
  return {
    ...state,
    state1: 'sdf'
  };
}, (dispatch) => {
  console.log('mapDispatchToprops', dispatch);
  return {
    dispatch,
    A: () => {},
    B: () => {}
  };
}, (props, ownDispatch) => {
  console.error('merge props', props, ownDispatch);
  return {
    ...props,
    ...ownDispatch,
    extendProps: 12
  };
})(App);
