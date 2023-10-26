import axios from "axios";

export const instance = axios.create({
    baseURL: 'http://localhost:3000/'
});

export const getProduct = async () => {
    return await instance.get('product')
}

export const getCart = async () => {
    return await instance.get('cart')
}