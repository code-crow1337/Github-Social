import express from 'express';

const api = express.Router();

api.get('/',(req,res) => {
  res.send('fetching all the data');
});

export default api; 