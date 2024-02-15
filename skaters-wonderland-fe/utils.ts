import axios from 'axios';

const SwApi = axios.create({
  baseURL: 'https://skaters-wonderland-be.onrender.com/api'
});


//--------------------------------lands---------------------


export const fetchLands = ()=>{

    return  SwApi.get('/lands')
    .then((response)=> {
      return(response.data);
    })
    .catch((error) =>{
      console.log(error);
    })
  }