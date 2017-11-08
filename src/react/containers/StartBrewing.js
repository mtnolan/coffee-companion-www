// @flow
import React, { Component } from 'react';
import * as actions from '../_actions';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

type Props = {
  history: any,
  actions: any,
};
type State = {};

class StartBrewing extends Component<Props, State> {
  componentDidMount() {
    this.props.actions.deselectAllCoffee();
  }

  pickBean() {
    this.props.history.push('/pick-bean');
  }

  render() {
    return (
      <div className="startBrewing">
        <div className="title">
          <h1>
            Coffee Companion
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            interdum elit non ipsum efficitur, sit amet egestas purus
            condimentum. Aenean facilisis sagittis odio id iaculis. Phasellus
            congue sem non metus dictum, eget ullamcorper lectus porttitor.
          </p>
        </div>
        <div className="buttons">
          <button
            className="btn btn-success btn-lg"
            onClick={this.pickBean.bind(this)}>
            Start Brewing!
          </button>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}

export default connect(null, mapDispatchToProps)(StartBrewing);
