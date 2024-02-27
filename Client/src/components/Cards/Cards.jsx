import Card from '../Card/Card';
import './Cards.css'
import Pages from '../Pagination/Pagination';
import { Link} from 'react-router-dom';



function Cards(props){

let allDogs= props.allDogsState;
const {currentPage,  dogs, page}=props;

if (allDogs[0]=== 'N') {
return (    <div className="section">
   
   <h2>There are no dog breeds with that name.</h2>

   {/* <Link to='/home'>
                <button className="b" > Back to Home</button>
     </Link> */}
    </div>)
}else{
    return  (
        <>

<div id="all">
<div className="paginationCards">
<Pages
dogs={dogs}
all={props.allDogsState.length} 
page={page}
currentPage={currentPage}
 />
</div>
<div className="cards">



{ allDogs?.map((d)=>{
           return(
               <Card name={d.name} image={d.image} key={d.id} weight_min= {d.weight_min} weight_max={d.weight_max} height_min={d.height_min} height_max={d.height_max} id={d.id} Temperaments={d.Temperaments} life_span={d.life_span}/>
                    
           )
       })
}
 

         </div>
</div>



      </>
    )
}


}

export default Cards;