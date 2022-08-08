import axios from 'axios';
import Token from '../Auth/Token';

function Api() {
  const config = {
    headers: { Authorization: `Bearer ${Token}` },
  };

  return axios
    .get('https://upayments-studycase-api.herokuapp.com/api/products/', config)
    .then((data) => data.data.products)
    .catch((error) => console.log(error));
}

export default Api;
