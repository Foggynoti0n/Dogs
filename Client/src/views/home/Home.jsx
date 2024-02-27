import '../home/Home.css'
import {Link} from 'react-router-dom'
import { useEffect,useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { allDogs } from '../../redux/actions'
import Cards from '../../components/Cards/Cards'



function Home(){
  
    const dispatch = useDispatch();
    const allDogsState = useSelector((state) => state.AllDogs);
    // console.log(allDogsState);



//Para el paginado
    const DOGS_PER_PAGE= 8; 
    const [currentPage, setCurrentPage] = useState(1)//la inicializo en 1 asi cuando el componente se monta por primera vez o cuando se reinicia la pagina, la primera página de resultados se muestre. 
    const [dogs, setDogs] = useState(DOGS_PER_PAGE)
    const indexOfLastDog = currentPage * dogs
    const indexOfFirstDog = indexOfLastDog - dogs  //calculan los índices del primer y último perro que se mostrará en la página actual, en función de la página actual y la cantidad de perros por página.
    const currentDogs = allDogsState.slice(indexOfFirstDog, indexOfLastDog)  //Creo una nueva lista de currentDogs, una porción de la lista allDogs, limitada por los índices calculados anteriormente. Esto se utiliza para mostrar los perros de la página actual.
    const page = (p) => {
        setCurrentPage(p)
    }

  




useEffect(()=>{
dispatch(allDogs())
},[dispatch])



useEffect(() => {
}, [ allDogsState]);


    return(
    <>
<div id="title">
  <h1>All dog breds</h1>
  <hr />
</div>
  <div id="section">

   <div id="index">
    <h3>Index</h3>
 
      {currentDogs?.map((dog)=>{ return (<li key={dog.id}>| <Link to={`/dogs/${dog.id}`} >{dog.name} </Link> </li>)})}
 
   </div>
<Cards dogs={dogs} allDogsState= {currentDogs} all={allDogsState.length} page={page} currentPage={currentPage} />  

  </div>
    </>)
}


export default Home;