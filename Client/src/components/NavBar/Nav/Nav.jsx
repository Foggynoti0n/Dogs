import React from 'react'
import Filters from '../../Filters/Filters.jsx'
import SearchBar from '../SearchBar/SearchBar'
import './Nav.css'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div>
      <nav>
      <SearchBar />
<div className="navBar">

<div className="fComp">

<Filters  /> 
<Link to='/create' > <button className="btn">CREATE YOUR DOG</button> </Link>
</div>

</div>



</nav>
    </div>
  )
}

export default Nav