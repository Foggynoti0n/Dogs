import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDogDetail } from "../../redux/actions";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import './Detail.css'

export default function Detail() {
const dispatch = useDispatch()
const dog = useSelector((state) => state.Detail)


const { id } = useParams();
    
useEffect(() => {
    dispatch(getDogDetail(id))
}, [dispatch, id]);
    

    return (
        <div className="CardCont">

<div id="h">
<Link to='/home'>
                <button className="b" > Back to Home</button>
     </Link>
</div>
              

                    <div className="detail">

 <img src={dog?.image} alt='img not found'/>
  <div className="nameG">
 <h2>{dog.name}</h2>
 </div>
  <div className="info">
  <p> <b>Weight:  </b> Min: {dog.weight_min}kg / Max: {dog.weight_max}kg</p>
  <p> <b>Height:  </b> Min: {dog.height_min}m / Max: {dog.height_max}m</p>
  <p> <b>Life span:  </b>{dog.life_span}</p>
<p> <b>Temperament:  </b>{dog.Temperaments}</p>
  </div>
 
       
            </div>
                      
      
                    </div>

        
    )
}