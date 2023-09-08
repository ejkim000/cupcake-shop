import axios from 'axios';

const API_URL = '/api/sizes';

const getSizes = async() => {
    const res = await axios.get(API_URL);
    return res.data
}


const sizeService = {
    getSizes
}

export default sizeService;