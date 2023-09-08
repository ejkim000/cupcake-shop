import axios from 'axios';

const API_URL = '/api/items';

const getItems = async() => {
    const res = await axios.get(API_URL);
    return res.data
}

const itemService = {
    getItems
}

export default itemService;