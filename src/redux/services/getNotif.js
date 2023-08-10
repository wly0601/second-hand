import axios from 'axios';

const token = localStorage.getItem('token');

export default function getNotif(id) {
  return axios
    // eslint-disable-next-line prefer-template
    .get('https://fp-fsw-backend.vercel.app/api/notifications', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
}
