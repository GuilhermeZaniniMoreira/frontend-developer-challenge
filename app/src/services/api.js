import axios from 'axios';

const api = axios.create({
    baseURL: 'https://frontend-intern-challenge-api.iurykrieger.now.sh'
});

export default api;
