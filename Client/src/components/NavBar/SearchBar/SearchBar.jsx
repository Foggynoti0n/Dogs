import './SearchBar.css'
import { useState, useEffect } from 'react'
import {useDispatch} from 'react-redux'
import {  allDogs, searchByName } from '../../../redux/actions'

export default function SearchBar() {
  const dispatch = useDispatch();
  const [searchString, setSearchString] = useState("");
 

const [inputsErrors, setInputsErrors] = useState();

  function validate (searchString) {
    const errors= {}

    if (!isNaN(searchString.search)) {
      errors.search = 'Formato incorrecto'
    }
    return errors
  }

 

  function handleSearch(e) {
    e.preventDefault(); 
    
          setInputsErrors(
            validate({
            ...searchString,
              [e.target.name]: e.target.value,
            })
          );
    
    setSearchString(e.target.value); 
  }
 

  function handleSubmit(e) {
    e.preventDefault();
          let aux = Object.keys(inputsErrors);
        if (aux.length === 0) {
    
            setInputsErrors();
          } else {
                      return alert('Check info');
                    }
    dispatch(searchByName(searchString));

    setSearchString({
      search: '', 

  })

  }
   

   return (
      <div className='SearchBar' >
                      
        <button type='submit' onClick = {(e)=> handleSubmit(e)} >Search</button> 
          <input id='inputSearch' name='search' type='search' onChange={(e)=>handleSearch(e)} />
          
         
      </div>

   );
}