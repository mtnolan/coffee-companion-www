// @flow
import React, { Component } from 'react';
import type {CoffeeData, ReduxState} from '../types';
import { connect } from 'react-redux';

type Props = {
  brewingCoffees: Array<CoffeeData>,
};

class PickBean extends Component<Props> {

  render() {
    return (
      <div>
        Coffee:
      </div>
    );
  }
}

function mapStateToProps(state: ReduxState, ownProps: Props) {
  return {brewingCoffees: state.selectedCoffee };
}


export default connect(mapStateToProps)(PickBean);
