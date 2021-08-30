import tokenService from '../services/tokenService';
const BASE_URL = '/api/profiles/';

export function create(profile) {
  return fetch(BASE_URL, {
      method: "POST",
      headers: {
          'content-type': 'application/json', 
          'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(profile)
  }, {mode: "cors"})
  .then(res => res.json());
}

export function getAll() {
  return fetch(`${BASE_URL}`, {mode: 'cors'})
      .then(res => res.json())
}

export function getAllByCurrentUser(userid) {
  return fetch(`${BASE_URL}user/${userid}`, {mode: 'cors'})
      .then(res => res.json())
}

export function getOne(id) {
  return fetch(`${BASE_URL}${id}`, {mode: 'cors'})
      .then(res => res.json())
}

export function deleteOne(id) {
  return fetch(`${BASE_URL}${id}`, {
      method: 'DELETE',
      headers: {'Authorization': `Bearer ${tokenService.getToken()}`},
  }, {mode: 'cors'})
  .then(res => res.json())
}

export function update(profile) {
  return fetch(`${BASE_URL}${profile._id}`, {
      method: "PUT", 
      headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
      body: JSON.stringify(profile)
  }, {mode: 'cors'})
  .then(res => res.json());
}