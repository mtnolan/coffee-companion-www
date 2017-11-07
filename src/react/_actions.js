export const selectCoffee = (coffeeData) => ({
  type: 'SELECT_COFFEE',
  coffeeData,
});

export const deselectCoffee = (coffeeData) => ({
  type: 'DESELECT_COFFEE',
  coffeeData,
});

export const deselectAllCoffee = () => ({
  type: 'DESELECT_ALL_COFFEE',
});
