import axios from 'axios';

const url = (service, method) => `http://rp3.redpelicans.com:3004/api/${service}/${method}`;
export const request = (service, method, body, headers = {}) => {
  return axios({
    method: 'POST',
    url: url(service, method),
    body,
    headers,
  });
}
