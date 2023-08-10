/* eslint-disable import/no-import-module-exports */
import axios from 'axios';

const token = localStorage.getItem('token');

export default function updateProductCloudinary(id, cloudinaryUpload) {
  return axios
  // eslint-disable-next-line prefer-template
    .put(
      `https://fp-fsw-backend.vercel.app/api/product/picture/${id.toString()}/cloudinary`,
      cloudinaryUpload,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      },
    );
}
