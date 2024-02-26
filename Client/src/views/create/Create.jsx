import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link} from "react-router-dom";
import { getTemperaments, allDogs, postDog} from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import './Create.css'




export default function Create(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const temperaments = useSelector((state) => state.Temperaments)
    const temperamentsDb= temperaments.map((t)=>t.name)
 
    // console.log(temperamentsDb);
  


    const [input, setInput] = useState({
        name: '', 
        image: '',
        height_min: '', 
        height_max: '',
        weight_min:'',
        weight_max:'', 
        temperament: [], 
        life_span: ''
    })
    

    const [inputsErrors, setInputsErrors] = useState({
      name: '', 
      image: '',
      height_min: '', 
      height_max: '',
      weight_min:'',
      weight_max:'',  
      life_span: ''
      
      });


    const regURL= /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
      
  

    const validate = (input) => {
      const errors={}

    
        
        if (input.name === "") {
          errors.name= 'Name is null'
        }

        if (input.image=== "" || !regURL.test(input.image) ) {
          errors.image = "We  want to see your dog image";
        }

      
        if (input.height_min === "" ) {
          errors.height_min = "You must indicate the minimum height";
        } else if (parseInt(input.height_min)> parseInt(input.height_max)) {
          errors.height_min = "Height(min) must be less than Height(max)";
       }

        if (input.height_max === "" ) {
             errors.height_max = "You must indicate the maximum height";
          } else if (parseInt(input.height_max) < parseInt(input.height_min )) {
            errors.height_max = "Height(max) must be greater than Height(min) ";
         }
         if (input.weight_min === "" ) {
          errors.weight_min = "You must indicate the minimum weight";
        } else if (parseInt(input.weight_min)> parseInt(input.weight_max)) {
          errors.weight_min = "Weight(min) must be less than Weight(max) ";
       }

        if (input.weight_max === "" ) {
             errors.weight_max = "You must indicate the maximum weight";
          } else if (parseInt(input.weight_max) < parseInt(input.weight_min )) {
            errors.weight_max = "Weight(max) must be greater than Weight(min)";
         }

         if (input.life_span === "" ) {
          errors.life_span = "You must indicate life span";
        }
  

        return errors;
      }
      
    
   
    


    useEffect(()=>{
        dispatch(getTemperaments())
       dispatch(allDogs())
    }, [dispatch])

    

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value, 
        })

        setInputsErrors(
            validate({
              ...input,
              [e.target.name]: e.target.value,
            })
          );
    }

    function handleSelectTemperaments(e) {
        setInput({
            ...input,
            temperament: [...input.temperament, e.target.value]
        })
    }

    function handleDeleteTemperaments(e) {
      setInput({
          ...input,
          temperament: input.temperament.filter( t => t !== e )
      })
  }

 


    function handleSubmit(e) {
        e.preventDefault();
        let aux = Object.keys(inputsErrors);
        if (aux.length === 0) {
    
            setInputsErrors({
              name: '', 
              image: '',
              height_min: '', 
              height_max: '',
              weight_min:'',
              weight_max:'', 
              life_span:''
            
            });
      
          
          } else {
            return alert('Check info');
          }

        dispatch(postDog(input))

        setInput({
          name: '', 
          image: '',
          height_min: '', 
          height_max: '',
          weight_min:'',
          weight_max:'', 
          temperament: [], 
          life_span: ''
        })
        navigate('/home')
    }



  

    return(
        <div id="createPage" >
            <form className="createBox" onSubmit={e=>handleSubmit(e)}>
            <div className="formItems">
                 <div className="label">
                 <label >Name</label>
                 </div>
                 
                    <input type = 'text'value = {input.name}  onChange = {handleChange} name='name'  key='name' />
                    <span>{inputsErrors?.name && inputsErrors.name}</span>
             </div>
             
            <div className="formItems">
            <div className="label">
                 <label >Image</label>
                 </div>
                    <input type = 'text' value ={input.image} name= 'image'  onChange = {handleChange}  key="image"/>
                    <span>{inputsErrors?.image && inputsErrors.image}</span>
                
            </div>

            <div className="formItems">
              
            <div className="label" >
                 <label >Height (min)</label>
                 </div>

                 <div className="hw">
                 <input   type = 'number' value = {input.height_min}  onChange = {handleChange} name='height_min'  key="height_min" />
                   <span>{inputsErrors?.height_min && inputsErrors.height_min}</span>
                 </div>

                  <div className="label">
                 <label >Height (max)</label>
                 </div>

                 <div className="hw">
                 <input   type = 'number' value = {input.height_max}  onChange = {handleChange} name='height_max'  key="height_max" />
                     <span>{inputsErrors?.height_max && inputsErrors.height_max}</span>
                 </div>

            </div>



              <div className="formItems">
              <div className="label">
                 <label >Weight (min)</label>
                 </div>
                <div className="hw">
              <input   type = 'number' value = {input.weight_min}  onChange = {handleChange} name='weight_min'  key="weight_min" />
              <span>{inputsErrors?.weight_min && inputsErrors.weight_min}</span>
              </div>

              <div className="label">
                 <label >Weight (max)</label>
              </div>

              <div className="hw">
              <input   type = 'number' value = {input.weight_max} name='weight_max'  onChange = {handleChange} key="weight_max" />
                    <span>{inputsErrors?.weight_max && inputsErrors.weight_max}</span>
              </div>

            </div>



            <div className="formItems">
            <div className="label">
                 <label > Life span</label>
                 </div>
                    <input   type = 'number' value = {input.life_span}  onChange = {handleChange} name='life_span'  key="life_span" />
                    <span>{inputsErrors?.life_span && inputsErrors.life_span}</span>
            </div>
              
                   <div className="formItems">
                               
                   <div className="label">
                 <label >Temperament</label>
                 </div>
                    <select onChange={e=>handleSelectTemperaments(e)}>
                        <option value='temperament' key='temperament'></option>
                        {temperamentsDb.map((t) => {
                            return(
                                <option value={t} key={t}>{t + ' '}</option>
                            )
                        })}
                    </select>
                    <ul>    
                    {input.temperament.map( ( e, index) =>
                            <li key={index}>{e}
                                <button  id="xBtn" onClick={()=>handleDeleteTemperaments(e)} > X</button>
                            </li>
                    )}
                    </ul>
                   </div>
 
              
          
      
                                   
        

             
              

          
             
<div className="buttons">
    
<button id="btn" type="submit">Create</button>
                <Link to='/home'>
                <button className="btn" >back</button>
            </Link>
</div>
                {/* <div id="btnDiv">
           {Object.keys(inputsErrors).length === 0 ? (
           
          ) : null}</div> */}
            </form>


        </div>
    )
}