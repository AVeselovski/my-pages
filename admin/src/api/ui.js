import axios from 'axios';
import { ROOT_URL } from '../settings/constants';

export default {
  postPage(token, data) {
    return axios.post(`${ROOT_URL}/pages`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};
