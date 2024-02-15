import axios from 'axios';

const SwApi = axios.create({
  baseURL: 'https://skaters-wonderland-be.onrender.com/api'
});

//--------------------------------Types---------------------

interface LandsPostBody{
    landname: string,
    city: string,
    country: string,
    postcode: string,
    description: string,
    land_img_url: string,
    username: string,
  }

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

  export const addNewLand = (postBody: LandsPostBody)=>{
console.log("in utils, postBody:", postBody)
    return  SwApi.post('/land', postBody)
      .then((response)=> {
        console.log("in utils, postedLand:", response)
        return(response);
      })
      .catch((error) =>{
        console.log(error.status);
      })
  }