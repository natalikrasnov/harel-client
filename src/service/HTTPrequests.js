import axios from 'axios'

const baseURL = "http://localhost:8080";
const loginPath = "/login";
const getCustomersPath = "/customers";
const getCustomerByIdPath = "/customer";
const editCustomerPath = "/edit/customer";

export async function login(data) {
    try {
        const result = await axios.post(baseURL+loginPath, data)
        return result.data
    } catch (e) {
        console.log("error on login from server", e)
        if (e?.response?.data?.message)
          alert("error: " + e?.response?.data?.message);
        return null
    }
}


export async function saveCustomer(data) {
    console.log("save customer")
    try {
        const result = await axios.post(baseURL+editCustomerPath, data);
        return result.data;
    } catch (e) {
        console.log("error on login from server", e);
        if (e?.response?.data?.message)
          alert("error: " + e?.response?.data?.message);
        return null;
    }
}

export async function getCustomers() {
    try {
        const result = await axios.get(baseURL+getCustomersPath)
        return result.data
    } catch (e) {
        console.log("error get customers")
        if (e?.response?.data?.message)
          alert("error: " + e?.response?.data?.message);
        return false
    }
    
}


export async function getCustomerById(id) {
    try {
        const params = '?'+(new URLSearchParams({id})).toString();
        const result = await axios.get(baseURL + getCustomerByIdPath + params);
        return result.data;
    } catch (e) {
        console.log("error get customer", id);
        if (e?.response?.data?.message)
            alert("error: " + e?.response?.data?.message);
        return false;
    }
}