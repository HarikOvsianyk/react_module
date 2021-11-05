export const GET_DATA = '[form] - get data';

export const getData = (data) => ({
    type: GET_DATA,
    payload: data,
})