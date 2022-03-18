import * as actionTypes from '../constants/cartConstants';
import { axiosInstance } from '../../config';

export const addToCart = (id, quantity) => async (dispatch, getState) => {
    const { data } = await axiosInstance.get(`/api/products/${id}`);

    dispatch ({
        type: actionTypes.ADD_TO_CART,
        payload: {
            product: data._id,
            name: data.product_name,
            description: data.product_description,
            price: data.product_price,
            stock: data.product_stock,
            quantity,
        }
    })

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => async (dispatch, getState) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    })

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
}