import {CALL_API} from '../apiMiddleware';
import {
  EMAIL_LOGIN,
  EMAIL_LOGIN_SUCCESS,
  EMAIL_LOGIN_FAILED,
  GET_CATEGORIES_FAILED,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES,
  SET_CATEGORIES_SUCCESS,
  REMOVE_CATEGORIES_SUCCESS,
  SET_CATEGORIES_FAILED,
  SET_CATEGORIES,
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILED,
  ADD_PRODUCTS,
  ADD_PRODUCTS_SUCCESS,
  ADD_PRODUCTS_FAILED,
} from '../types/home';
import {Alert} from 'react-native';

export const getCategories = () => async dispatch => {
  try {
    return await dispatch({
      [CALL_API]: {
        url: '/categories',
        method: 'GET',
        types: [GET_CATEGORIES, GET_CATEGORIES_SUCCESS, GET_CATEGORIES_FAILED],
        showLoader: true,
      },
    });
  } catch (error) {
    Alert.alert(`${error}`);
  }
};

export const getProducts = () => async dispatch => {
  try {
    return await dispatch({
      [CALL_API]: {
        url: '/products',
        method: 'GET',
        types: [GET_PRODUCTS, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILED],
        showLoader: true,
      },
    });
  } catch (error) {
    Alert.alert(`${error}`);
  }
};

export const getProductDetails = id => async dispatch => {
  try {
    return await dispatch({
      [CALL_API]: {
        url: `/products/${id}`,
        method: 'GET',
        // types: [GET_PRODUCTS, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILED],
        showLoader: true,
      },
    });
  } catch (error) {
    Alert.alert(`${error}`);
  }
};

export const addProduct = payload => async dispatch => {
  try {
    return await dispatch({
      [CALL_API]: {
        url: '/products',
        method: 'POST',
        body: payload,
        types: [ADD_PRODUCTS, ADD_PRODUCTS_SUCCESS, ADD_PRODUCTS_FAILED],
        showLoader: true,
      },
    });
  } catch (error) {
    Alert.alert(`${error}`);
  }
};

export const setCategories = name => {
  return {type: SET_CATEGORIES_SUCCESS, body: name};
};

export const removeCategories = name => {
  return {type: REMOVE_CATEGORIES_SUCCESS, body: name};
};

// export function savePreferences(settings) {
//   return {body: settings, type: SAVE_PREFERENCES};
// }
