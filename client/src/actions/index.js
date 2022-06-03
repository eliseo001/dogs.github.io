import axios from "axios";
export const GET_DOGS = 'GET_DOGS'

export const DOG_DETAIL = 'DOG_DETAIL'
export const GET_DOGS_BY_NAME = 'GET_DOGS_BY_NAME'
export const GET_TEMPERAMENTS = 'GET_TEMPERAMENTS'
export const POST_DOG = 'POST_DOG'
export const FILTER_DOGS_CREATED = 'FILTER_DOGS_CREATED'
export const FILTER_BY_TEMP = 'FILTER_BY_TEMP'
export const ORDER_BY_NAME = 'ORDER_BY_NAME'
export const ORDER_BY_WEIGHT = 'ORDER_BY_WEIGHT'















export function getDogs() {
    return async function(dispatch) {
        var json = await axios.get("http://localhost:3001/api/dogs/");
        return dispatch ({
            type: "GET_DOGS",
            payload: json.data
        })
    }
};

export function dogDetail(id) {
    return async function (dispatch) {
        var json = await axios.get("http://localhost:3001/api/dogs/" + id);
        return dispatch ({
            type: "DOG_DETAIL",
            payload: json.data
        })
    }
};

export function getDogsByName (name) { 
    return async function (dispatch) {
        var json = await axios.get ("http://localhost:3001/api/dogs?name=" + name);  
        return dispatch ({
            type: "GET_DOGS_BY_NAME",
            payload: json.data
        })
    }
};

export function getTemperaments() {
    return async function (dispatch) {
        var json = await axios.get("http://localhost:3001/api/temperament/");
        return dispatch({
            type: "GET_TEMPERAMENTS",
            payload: json.data
        })
    }
};

export function postDog (payload) {  
    return async function (dispatch) {
        var json = await axios.post("http://localhost:3001/api/dog/", payload);  
        /* console.log(json)*/                                                   
        return dispatch ({
            type: "POST_DOG",
            payload: json.data
        })
    }
};



export function filterDogsCreated (payload){ 
    console.log(payload)
    return {
        type: "FILTER_DOGS_CREATED",
        payload
    }
};

export function filterDogTemp(payload) { 
    return {
        type: "FILTER_BY_TEMP",
        payload
    }
};

export function orderbyName (payload) {
    return {
        type: "ORDER_BY_NAME",
        payload
    }
};

export function orderbyWeight(payload) {
    return {
        type: "ORDER_BY_WEIGHT",
        payload
    }
};

