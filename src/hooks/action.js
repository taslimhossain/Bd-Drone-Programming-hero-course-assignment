import axios from "axios";
import { useEffect, useState } from "react";
import apiurl from "./apiUrl";

export const GetDrones = () => {
    const [dbproduct, setDbProduct] = useState('')
    const url = apiurl();

    useEffect(() => {
    
        const fetchProduct = async () => {
            const { data } = await axios.get(`${url}/products`)
            setDbProduct(data)
        }
        fetchProduct();

    }, [url])

    return (dbproduct)
}

export const GetDrone = (id) => {
    const [dbDrone, setDbDrone] = useState('')
    const url = apiurl();

    useEffect(() => {
    
        const fetchDrone = async () => {
            const { data } = await axios.get(`${url}/product/${id}`)
            setDbDrone(data)
        }
        fetchDrone();

    }, [id, url])

    return (dbDrone)
}

export const GetReview = () => {
    const [reviews, getReviews] = useState('')
    const url = apiurl();

    useEffect(() => {
    
        const fetchReview = async () => {
            const { data } = await axios.get(`${url}/review`)
            getReviews(data)
        }
        fetchReview();

    }, [url])

    return (reviews)
}

export const GetOrder = (userEmail = '') => {

    const [orders, setOrders] = useState('')
    const url = apiurl();

    useEffect(() => {
    
        const fetchOrders = async () => {
            const { data } = await axios.get(`${url}/order`, {
                params: {
                  email: userEmail
                }
              })
            setOrders(data)
        }
        fetchOrders();

    }, [url, userEmail])

    return (orders)
}