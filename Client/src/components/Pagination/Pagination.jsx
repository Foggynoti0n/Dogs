

import React from 'react'
import './Pagination.css'

export default function Pages({dogs, all, page, currentPage}) {
  const indexPage = [];
 
  
   for(let i=0; i<=Math.ceil(all/dogs); i++){
    indexPage.push(i+1)
   }

  function prevHandler(currentPage){
    if(currentPage !== 1) page(currentPage - 1) 
  }

  function nextHandler(currentPage){
    if(currentPage !== 23) page(currentPage + 1) 
  }

   indexPage.pop()
   const prev = "< Prev"
   const next = "Next >"

   return(
    
<>
<div className="paginationBar">
<button key="prev" onClick={() => prevHandler(currentPage)} className='nextprev'> {prev} </button>
  {indexPage && indexPage.map((n) =>{
    return(
      <span className='spanPag' key={n} onClick={() => page(n)}>{`Page ${currentPage}  `}</span>
  )
  })}


<button key="next" onClick={() => nextHandler(currentPage)} className='nextprev'> {next}</button>
</div>


</>
   )
}