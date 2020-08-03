import axios from 'axios';

const restApi = axios.create({
  baseURL: 'https://warpfrontendtestserver.herokuapp.com/v1',
  headers: {
    'Content-type': 'application/json'
  }
});

const fetchAllVehicles = () => restApi.get('/vehicles');
const fetchVehicleById = id => restApi.get(`/vehicle/${id}`);

export {
  fetchAllVehicles,
  fetchVehicleById,
};

