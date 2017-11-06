import React, { Component } from 'react';
import CoffeeCard from './CoffeeCard';
import StackGrid from 'react-stack-grid';
import $ from 'jquery';

type Props = {};
type State = {
  breakpointSize: string,
  coffees: Array,
};

export default class CoffeeList extends Component<Props, State> {
  grid: StackGrid;

  state = {
    breakpointSize: '',
    coffees: null,
  };

  constructor() {
    super();
    this.state = {
      breakpointSize: this.getWindowSize(),
    };
    this.eventSubscribtions();
    this.loadCoffees();
  }

  eventSubscribtions() {
    $( window ).resize(this.checkWindowSize.bind(this));
  }

  checkWindowSize() {
    const breakpointSize = this.getWindowSize();

    if (breakpointSize !== this.state.breakpointSize) {
      this.setState({breakpointSize: breakpointSize});
      if (this.grid !== undefined) {
        this.grid.updateLayout();
      }
    }
  }

  getWindowSize() {
    var breakpointSize = 'xs';
    if (window.matchMedia('(min-width: 1200px)').matches) {
      breakpointSize = 'lg';
    } else if (window.matchMedia('(min-width: 992px)').matches) {
      breakpointSize = 'md';
    } else if (window.matchMedia('(min-width: 768px)').matches) {
      breakpointSize = 'sm';
    }

    return breakpointSize;
  }

  loadCoffees() {
    $.getJSON(
      'https://9wsw0v1skf.execute-api.us-east-1.amazonaws.com/prod/coffee',
      function(data) {

        console.log(data);

        this.setState({coffees: data});
      }.bind(this),
    );
    // $.ajax({
    //   type: 'GET',
    //   contentType: 'application/json; charset=utf-8',
    //   url: 'https://9wsw0v1skf.execute-api.us-east-1.amazonaws.com/prod/coffee'
    // });
  }

  render() {
    var columnWidth;
    const breakpointSize = this.state.breakpointSize === ''
      ? this.getWindowSize()
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
          />
        );
      });
    }

    return (
      <div className="pickBean">
        <StackGrid
          columnWidth={columnWidth}
          appearDelay={500}
          monitorImagesLoaded={true}
          gutterWidth={15}
          gutterHeight={15}
          gridRef={grid => this.grid = grid}>
          {coffeeComponents}
          {/* <CoffeeCard
            title="Kick Ass® Whole Bean [Dark] | Kicking Horse Coffee"
            description="This remarkable blend of beans is the spirit of Kicking
            Horse® Coffee, and a bold invitation to wake up and kick ass with
            us."
            imageUrl={'https://www.kickinghorsecoffee.com/assets/images/' +
              'fb-kickass-bean.jpg'}
          />
          <CoffeeCard
            title="Streetlevel"
            description="Crafted to serve as the backbone for our milk drink
            offerings, the current rendition of Streetlevel espresso is
            quintessentially sweet combining balanced notes."
            imageUrl={'http://cdn.shopify.com/s/files/1/0035/9372/products/'
            + 'Streetlevel_Best_Sellers_grande.jpg?v=1490113524'}
          />
          <CoffeeCard
            title="Brew House Blend®"
            description="Our signature house blend is named after the place it
            was conceived. It is comprised of wonderfully sweet coffees from the
            Americas. Stone fruit sweetness gentl"
            imageUrl={'http://cdn.shopify.com/s/files/1/0210/8996/products/'
            + 'Brewhouse_Blend_Web-01_1024x1024.jpg?v=1466708681'}
          />
          <CoffeeCard
            title="House Blend"
            description="Our House Blend is designed to showcase the intrinsic
             sweetness and lively fruit flavors that characterize our favorite
             coffees. Milk chocolate, mandarin, and apple are tastes we love and
             are presented here with high definition clarity."
            imageUrl={
              'https://www.intelligentsiacoffee.com/media/catalog/product/'
            + 'cache/image/265x265/799896e5c6c37e11608b9f8e1d047d15/h/o/'
            + 'house-blend-banner-1_1.jpg'}
          /> */}
        </StackGrid>
      </div>
    );
  }
}
