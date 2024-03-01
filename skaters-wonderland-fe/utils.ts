import axios from 'axios';

const SwApi = axios.create({
  baseURL: 'https://skaters-wonderland-be.onrender.com/api'
});

//--------------------------------Types---------------------

interface LandPostBody{
    landname: string;
    city: string;
    country: string;
    postcode: string;
    description: string;
    land_img_url: string;
    username: string;
  }


interface LandVoteUpdate {
  votes_update : number;
}

interface CommentPostBody {
  body: string;
  username: string;
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

  export const fetchLandById = (land_id: string)=>{

    return  SwApi.get(`/lands/${land_id}`)
    .then((response)=> {
      return(response.data);
    })
    .catch((error) =>{
      console.log(error);
    })
 
  }

export const addNewLand = (postBody: LandPostBody)=>{
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


  export const patchLands = (land_id: number ,votesUpdate: LandVoteUpdate)=>{


    return  SwApi.patch(`/lands/${land_id}`, votesUpdate)
    .then((response)=> {
      return(response.data);
    })
    .catch((error) =>{
      console.log(error.response);
    })
 
  }


  //------------------------------------------comments----------------------------------

  
  
  export const addComment = (land_id: string, postBody: CommentPostBody)=>{
        return  SwApi.post(`/lands/${land_id}/comments`, postBody)
          .then((response)=> {
            return(response);
          })
          .catch((error) =>{
            console.log(error.status);
          })
      }

  
  export const deleteComment = (commentID: string)=>{

    return  SwApi.delete(`/comments/${commentID}`).then((res)=>{
      
    })
    .catch((error) =>{
      // handle error
      console.log(error.response);
    })

  }