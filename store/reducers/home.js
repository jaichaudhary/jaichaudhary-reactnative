import {
  GET_CATEGORIES_SUCCESS,
  GET_PRODUCTS_SUCCESS,
  REMOVE_CATEGORIES_SUCCESS,
  SET_CATEGORIES_SUCCESS,
} from '../types/home';

const initialState = {
  products: null,
  categories: null,
  selectedCategories: [],
};

export function homeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORIES_SUCCESS: {
      const {categories} = action.body;
      return {...state, categories: categories};
    }
    case GET_PRODUCTS_SUCCESS: {
      const {products} = action.body;
      return {...state, products: products};
    }
    case SET_CATEGORIES_SUCCESS: {
      const name = action.body;
      return {
        ...state,
        selectedCategories: [...state.selectedCategories, name],
      };
    }
    case REMOVE_CATEGORIES_SUCCESS: {
      const name = action.body;
      const filteredArray = state.selectedCategories.filter(val => {
        if (val !== name) {
          return val;
        }
      });
      return {...state, selectedCategories: [...filteredArray]};
    }
    default:
      return state;
  }
}
