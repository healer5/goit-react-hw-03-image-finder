import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/';
const params = {
  key: '22840960-ea2b07fd8d407a17e77cd52c1',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
  per_page: 12,
  isImageModalOpen: false,
};

export const fetchImages = async (query, page) => {
  const response = await axios.get(`/?q=${query}&page=${page}`, { params });
  return response.data;
};
