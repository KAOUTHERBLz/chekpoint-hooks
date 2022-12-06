import React from 'react'
import { Form } from 'react-bootstrap'
import ReactStars from 'react-stars'
const FilterMovie = ({inputsearch,setInputsearch,inputRate,setInputRate}) => {
  return (
    <div>
       <Form.Control type="text" placeholder="Enter email"
       onChange={(e)=>setInputsearch(e.target.value)}/>
       <ReactStars
  count={5}
  onChange={setInputRate}
  size={24}
  color2={'#ffd700'} />

    </div>
  )
}

export default FilterMovie