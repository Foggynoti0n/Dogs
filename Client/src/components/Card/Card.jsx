import { Link } from 'react-router-dom';
import './Card.css'

 function Card(d){
    

return(
 <>


<div className="div"> 

 <div className="imageDog">
 <Link to={`/dogs/${d.id}`} >
<img src={d?.image}  alt='img not found' />
</Link>
</div>   
<div className="name">
<h4> {d.name} </h4>
  
</div>

<div id="DogInf">
<div className="buyNow">
   
   <p> <b>Weight:  </b> Min: {d.weight_min}kg / Max: {d.weight_max}kg</p>
    
</div>

<div id="t">
<p ><b>Temperament: </b>{d.Temperaments}</p> 
</div>
</div>

</div>


 </>
)

} 

export default Card;