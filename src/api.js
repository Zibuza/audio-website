import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/api';

export const getAllProducts = async () => {
  try {
    const response = await axios.get('/products');
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
