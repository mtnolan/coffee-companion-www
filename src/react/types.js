// @flow

export type CoffeeData = {
  Id: string,
  Image: string,
  Description: string,
  Title: string,
};

export type ReduxState = {
  +isBrewing: boolean,
  +selectedCoffee : Array<CoffeeData>
};
