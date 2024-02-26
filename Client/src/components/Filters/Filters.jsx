
import './Filters.css'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {weightFilter,
getTemperaments,
tempFilter,
createdFilter,
alphFilter,
} from "../../redux/actions";


export default function Filters(){

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getTemperaments());
    }, []);
  
    const Temperaments = useSelector((state) => state.Temperaments); 
  
    const weightHandler = (event) => {
      if (event.target.value === "Select Weight") {
        return;
      } else {
        dispatch(weightFilter(event.target.value)); 
      }
    };
    const alphHandler = (event) => {
      if (event.target.value === "Alphabetical Order") {
        return;
      } else {
        dispatch(alphFilter(event.target.value));
      }
    };
  
    const tempHandler = (event) => {
      if (event.target.value === "Temperaments") {
        return;
      }else{
        dispatch(tempFilter(event.target.value));}
      
    };
  
    const createdHandler = (event) => {
      dispatch(createdFilter(event.target.value));
    };
  


return(
    <>
                        <div className=''>
                        <select className='selectF' onChange={alphHandler} defaultValue="Alphabetical Order">
          <option value="Alphabetical Order">Order A-Z</option>
          <option value="a-z">A-Z</option>
          <option value="z-a">Z-A</option>
        </select>


            <select className="selectF" onChange={weightHandler} defaultValue="Select Weight">
            <option value="Select Weight">Weight</option>
          <option value="top">top</option>
          <option value="low">low</option>
            </select> 
    
             
            <select className='selectF' onChange={tempHandler} >
          <option value="Temperaments">Temperaments</option>
          {Temperaments?.map((temp) => {
            return (
              <option key={temp.name} value={temp.name}>
                {temp.name}
              </option>
            );
          })}
        </select>

        <select className="selectF" onChange={createdHandler}> 
            <option value="AllDogs">All</option>
          <option value="DogsApi">Dogs from api</option>
          <option value="DogsCreate">Created</option>
                    
              
            </select>    


        </div>
    
    </>
)


}