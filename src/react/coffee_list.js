// @flow
import React, { Component } from 'react';
import Coffee from './coffee';
import StackGrid from "react-stack-grid";
import $ from "jquery";

type Props = {};

type State = {
  breakpointSize: string,
};

export default class CoffeeList extends Component<Props, State> {
  state = {
    breakpointSize: '',
  };

  constructor() {
    super();
    this.checkWindowSize();
    this.eventSubscribtions();
  }

  eventSubscribtions() {
    $( window ).resize(this.checkWindowSize.bind(this));
  }

  checkWindowSize() {
    const breakpointSize = this.getWindowSize();

    if (breakpointSize != this.state.breakpointSize) {
      this.setState({breakpointSize: breakpointSize});
    }
  }

  getWindowSize() {
    var breakpointSize = 'xs';
    if (window.matchMedia('(min-width: 992px)').matches) {
      breakpointSize = 'md'
    } else if (window.matchMedia('(min-width: 768px)').matches) {
      breakpointSize = 'sm'
    }

    return breakpointSize;
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
        columnWidth = '33.33%';
        break;
      case 'lg':
        columnWidth = '33.33%'
        break;
    }
    debugger;

    return(
      <StackGrid
        columnWidth={columnWidth}
        appearDelay={500}
        monitorImagesLoaded={true}
        gutterWidth={15}
        gutterHeight={15}>
        <Coffee
          title="Kick Ass® Whole Bean [Dark] | Kicking Horse Coffee"
          description="This remarkable blend of beans is the spirit of Kicking Horse® Coffee, and a bold invitation to wake up and kick ass with us."
          imageUrl="https://www.kickinghorsecoffee.com/assets/images/fb-kickass-bean.jpg"
        />
        <Coffee
          title="Streetlevel"
          description="Crafted to serve as the backbone for our milk drink offerings, the current rendition of Streetlevel espresso is quintessentially sweet combining balanced notes."
          imageUrl="http://cdn.shopify.com/s/files/1/0035/9372/products/Streetlevel_Best_Sellers_grande.jpg?v=1490113524"
        />
        <Coffee
          title="Brew House Blend®"
          description="Our signature house blend is named after the place it was conceived. It is comprised of wonderfully sweet coffees from the Americas. Stone fruit sweetness gentl"
          imageUrl="http://cdn.shopify.com/s/files/1/0210/8996/products/Brewhouse_Blend_Web-01_1024x1024.jpg?v=1466708681"
        />
        <Coffee
          title="House Blend"
          description="Our House Blend is designed to showcase the intrinsic sweetness and lively fruit flavors that characterize our favorite coffees. Milk chocolate, mandarin, and apple are tastes we love and are presented here with high definition clarity."
          imageUrl="https://www.intelligentsiacoffee.com/media/catalog/product/cache/image/265x265/799896e5c6c37e11608b9f8e1d047d15/h/o/house-blend-banner-1_1.jpg"
        />
      </StackGrid>
    )
  }
}
