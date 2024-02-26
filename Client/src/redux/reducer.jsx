import {
    GET_DOGS,
    DETAIL,
    SEARCH_BY_NAME,
    POST_DOG,
    TEMP_DOG,
    WEIGHT_FILTER,
    ALPH_FILTER,
    TEMP_FILTER,
    CREATED,
  } from "./action-types";
  
  const initialState = {
    AllDogs: [],
    Copy: [],
    Temperaments: [],
    Detail: [],
    Copy2:[]
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_DOGS:
        return {
          ...state,
          AllDogs: action.payload,
          Copy: action.payload,
          Copy2: action.payload
        };
  
      case DETAIL:
        return {
          ...state,
          Detail: action.payload,
        };
  
      case SEARCH_BY_NAME:

      console.log(action.payload);
     
        return {
          ...state,
          AllDogs: [...action.payload],
        };
  
      case TEMP_DOG:
        
        return {
          ...state,
          Temperaments: action.payload,
        };
  

  
      case WEIGHT_FILTER:
        const orderDogsKg = action.payload === 'low' ?
        state.AllDogs.slice().sort(function(a, b) {
          if(parseInt(a.weight_min) < parseInt(b.weight_min)) {return -1}
          if(parseInt(b.weight_min) < parseInt(a.weight_min)) {return 1}
          return 0;
        }) : 
        state.AllDogs.slice().sort(function(a, b) {
          if(parseInt(a.weight_min) > parseInt(b.weight_min)) {return -1}
          if(parseInt(a.weight_min) > parseInt(b.weight_min)) {return 1}
          return 0;
        })
      return {
        ...state,
        AllDogs: orderDogsKg
      }
  
      case ALPH_FILTER:
        return {
          ...state,
          AllDogs: [...state.AllDogs].sort((a, b) => {
            if (a.name < b.name) {
              return action.payload === "z-a" ? 1 : -1;
            }
            if (a.name > b.name) {
              return action.payload === "z-a" ? -1 : 1;
            }
          }),
        };
  
      case TEMP_FILTER:

      const dogsFiltered=  action.payload == 'Temperaments' ? state.Copy2  : [...state.Copy].filter(
        (dog) =>
          dog.Temperaments !== undefined &&
          dog.Temperaments.includes(action.payload) === true
      )
        
        return {
          ...state,
          AllDogs: dogsFiltered,
          
        };
  
      case CREATED:

      const dogsCreatedFilter= [...state.Copy]
      const createdF= action.payload  === 'DogsCreate' 
      ?dogsCreatedFilter.filter((dog)=> dog.created == true) 
      : action.payload === 'AllDogs' ? state.Copy  : dogsCreatedFilter.filter((dog)=> dog.created == false)
        return {
          ...state,
          AllDogs: createdF, 
          

        };


      
        case POST_DOG:
          return{ 
            ...state,
          
          }
      default:
        return { ...state };
    }
  };
  
  export default rootReducer;