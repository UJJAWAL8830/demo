import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'
});

export const submitTriage = async (data) => {
  return api.post('/triage', data);
};
