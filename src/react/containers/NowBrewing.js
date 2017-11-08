// @flow
import React, { Component } from 'react';
import type {CoffeeData, ReduxState} from '../types';
import { connect } from 'react-redux';
import CoffeeDisplayCard from '../CoffeeDisplayCard';

type Props = {
  brewingCoffees: Array<CoffeeData>,
  history: any,
};

class PickBean extends Component<Props> {
  constructor(props) {
    super(props);
    if (this.props.brewingCoffees.length === 0) {
      this.props.history.push('/pick-bean');
    }
  }

  restart() {
    this.props.history.push(`/`);
  }

  render() {
    let currentCoffee = this.props.brewingCoffees;

    const coffeeComponents = currentCoffee.map(function(object: CoffeeData, i) {
      return (
        <CoffeeDisplayCard key={i} data={object} />
      );
    });

    return (
      <div className="nowBrewing">
        <div className="title">
          <h1>
            Now Brewing...
          </h1>
          <p>
            <button
              className="btn text-center btn-success"
              onClick={this.restart.bind(this)}>
              Pot's Dead!
            </button>
          </p>
        </div>
        {coffeeComponents}
      </div>
    );
  }
}

function mapStateToProps(state: ReduxState, ownProps: Props) {
  return { brewingCoffees: state.selectedCoffee };
}

export default connect(mapStateToProps)(PickBean);
