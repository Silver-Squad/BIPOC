import tokenService from '../services/tokenService';
const BASE_URL = '/api/profiles/';

export function getAll() {
  return fetch(`${BASE_URL}`, {mode: 'cors'})
      .then(res => res.json())
}