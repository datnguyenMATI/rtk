import axios from '../utils/axios-customize';

export const fetchData = async() => {
    try {
        const response = await axios.get('/api/users');
        return response
    
      } catch (err) {
        console.log(err);
      }
}

export const postCreateUser = async(name,job) => {
  try {
      const response = await axios.post('/api/users',{ name, job });
      return response
  
    } catch (err) {
      console.log(err);
    }
}

export const putUpdateUser  = async(id,name,job) => {
  try {
      const response = await axios.put(`/api/users/${id}`,{ name, job });
      return response
  
    } catch (err) {
      console.log(err);
    }
}