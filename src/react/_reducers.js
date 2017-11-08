// @flow
import type {CoffeeData, ReduxState} from './types';
type Action = {
  +type: string,
  +coffeeData: CoffeeData,
}

const reducer = (state : ReduxState, action: Action): ReduxState =>  {
  switch (action.type) {
    case 'SELECT_COFFEE':
      let currentSelectedCoffee = state.selectedCoffee;
      const selectedId = action.coffeeData.Id;
      for (let i = 0; i < currentSelectedCoffee.length; i++) {
        if (selectedId === currentSelectedCoffee[i].Id) {
          return state;
        }
      }
      currentSelectedCoffee.push(action.coffeeData);
      return { ...state, selectedCoffee: currentSelectedCoffee };
    case 'DESELECT_COFFEE':
      return state;
    case 'DESELECT_ALL_COFFEE':
      return { ...state, selectedCoffee: [] };
    default: return state;
  }
};

export default reducer;
