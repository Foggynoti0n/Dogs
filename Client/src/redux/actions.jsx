import axios from "axios";
import {
  GET_DOGS,
  DETAIL,
  SEARCH_BY_NAME,
  TEMP_DOG,
  ALPH_FILTER,
  WEIGHT_FILTER,
  CREATED,
  TEMP_FILTER,

} from "./action-types";

export const allDogs = () => {

    return async function (dispatch) {
      try {
        const response = await axios.get("http://localhost:3001/dogs");
       
        dispatch({ type: GET_DOGS, payload: response.data });
      } catch (error) {
        alert(error.message);
      }
    }}



    export function getDogDetail(id) {

      return async function (dispatch) {
  
          try {
              const response = await axios.get('http://localhost:3001/dogs/' + id)
              
              return dispatch({
                  type: DETAIL,
                  payload: response.data
              })
          }
          catch(error) {
              console.log(error)
          }
          
      }
  }


  export function searchByName(name){
    return async function(dispatch){
        try{
            const response = await axios.get(`http://localhost:3001/dogs/?name=${name}`)
          
            return dispatch({
                type: SEARCH_BY_NAME,
                payload: response.data
            })
        } catch (error){
          return error
        }
    }
}

export function getTemperaments(){
  return async function(dispatch){
    try {
      const response = await axios.get('http://localhost:3001/temperaments')
   
      return dispatch({
        type: TEMP_DOG,
        payload:response.data
      })
    } catch (error) {
      console.log(error);
    }
  }
}

export function postDog(d){

  return async function(){

      const response = await axios.post('http://localhost:3001/dogs', d)

      alert("Dog breed created")


      return response
  }

}

export const weightFilter = (event) => {
  try {
    return {
      type: WEIGHT_FILTER,
      payload: event,
    };
  } catch (error) {
    alert(error.message);
  }
};

export const alphFilter = (event) => {
  try {
    return {
      type: ALPH_FILTER,
      payload: event,
    };
  } catch (error) {
    alert(error.message);
  }
};

export const tempFilter = (event) => {
  try {
    return {
      type: TEMP_FILTER,
      payload: event,
    };
  } catch (error) {
    alert(error.message);
  }
};


export const createdFilter = (d) => {
  try {
    return (dispatch) => {
      return dispatch({
        type: CREATED,
        payload: d,
      });
      }
     
  } catch (error) {
    alert(error.message);
  }
}