import React, { Component } from 'react';
import ReactLoading from 'react-loading';

export default class Loading extends Component {
  render() {
    return (
      <ReactLoading
        type="spinningBubbles"
        color="#fff"
        height={ 150 }
        width={ 150 }
      />
    );
  }
}
