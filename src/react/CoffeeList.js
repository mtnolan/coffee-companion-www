// @flow
import React, { Component } from 'react';
import CoffeeCard from './CoffeeCard';
import type { CoffeeData } from './types';
import StackGrid from 'react-stack-grid';
import Loader from 'react-loader';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as actions from './_actions';
import $ from 'jquery';

type Props = {
  onPick: Function,
  actions: any,
  history: Object,
};
type State = {
  breakpointSize: string,
  coffees: Array<CoffeeData>,
  loaded: boolean,
};

const getWindowSize = (): string =>  {
  var breakpointSize = 'xs';
  if (window.matchMedia('(min-width: 1200px)').matches) {
    breakpointSize = 'lg';
  } else if (window.matchMedia('(min-width: 992px)').matches) {
    breakpointSize = 'md';
  } else if (window.matchMedia('(min-width: 768px)').matches) {
    breakpointSize = 'sm';
  }

  return breakpointSize;
};

class CoffeeList extends Component<Props, State> {
  grid: StackGrid;

  constructor(props: Props) {
    super(props);
    this.props.actions.deselectAllCoffee();
    this.state = this.getInitialState();
    this.eventSubscribtions();
    this.loadCoffees();
  }

  getInitialState() {
    const windowSize = getWindowSize();
    return {
      breakpointSize: windowSize,
      loading: true,
    };
  }

  eventSubscribtions() {
    $( window ).resize(this.checkWindowSize.bind(this));
  }

  checkWindowSize() {
    const breakpointSize = getWindowSize();

    if (breakpointSize !== this.state.breakpointSize) {
      this.setState({breakpointSize: breakpointSize});
      if (this.grid !== undefined) {
        this.grid.updateLayout();
      }
    }
  }

  loadCoffees() {
    $.getJSON(
      'https://9wsw0v1skf.execute-api.us-east-1.amazonaws.com/prod/coffee',
      function(data : Array<CoffeeData>) {
        this.setState({
          coffees: data,
          loaded: false,
        });
      }.bind(this),
    ).fail(function() {
      alert('Could not load the current coffee stock!  ' +
        'Contact mnolan to investigate');
    });
  }

  render() {
    var columnWidth;
    const breakpointSize = this.state.breakpointSize === ''
      ? getWindowSize()
      : this.state.breakpointSize;
    switch (breakpointSize) {
      case 'xs':
        columnWidth = '100%';
        break;
      case 'sm':
        columnWidth = '50%';
        break;
      case 'md':
      case 'lg':
        columnWidth = '33.33%';
        break;
      default:
        columnWidth = '100%';
        break;
    }

    let coffeeComponents = [];
    if (this.state.coffees !== undefined) {
      const currentCoffee = this.state.coffees;
      coffeeComponents = currentCoffee.map(function(object, i) {
        return (
          <CoffeeCard
            key={i}
            id={object.Id}
            title={object.Title}
            description={object.Description}
            imageUrl={object.Image}
            selectedCallback={(e) => {
              this.props.actions.selectCoffee(object);
              this.props.history.push(`/now-brewing`);
            }}
          />
        );
      }.bind(this));
    }

    return (
      <div className="pickBean">
        <Loader loaded={this.state.loaded} />
        <StackGrid
          columnWidth={columnWidth}
          appearDelay={500}
          monitorImagesLoaded={true}
          gutterWidth={15}
          gutterHeight={15}
          gridRef={grid => this.grid = grid}>
          {coffeeComponents}
        </StackGrid>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)};
}

export default connect(null, mapDispatchToProps)(CoffeeList);
