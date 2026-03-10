import axios from "axios";

const API = "http://localhost:3000/api/biodata";

const getToken = () => {
  return localStorage.getItem("token");
};

export const getAllBiodata = () => {

  return axios.get(API, {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  });

};

export const getSingleBiodata = (id) => {

  return axios.get(`${API}/${id}`, {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  });

};

export const createBiodata = (data) => {

  return axios.post(API, data, {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  });

};

export const updateBiodata = (id, data) => {

  return axios.put(`${API}/${id}`, data, {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  });

};

export const deleteBiodata = (id) => {

  return axios.delete(`${API}/${id}`, {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  });

};