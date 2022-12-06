import React from 'react'
import { useState } from 'react';
import { Button,Form,Modal } from 'react-bootstrap';


const AddMovie = ({add}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const [title,setTitle]=useState("")
const [Description,setDescription]=useState("")
const [rate,setrate]=useState(1)
const [posterUrl,setposterUrl]=useState("")
const handleTitle =(e)=>{
  
  setTitle(e.target.value)
}
const handleDescription =(e)=>{
  setDescription (e.target.value)
}
const handlerate =(e)=>{
  setrate (e.target.value)
}
const handleposterUrl =(e)=>{
  setposterUrl (e.target.value)
}
const handleAdd= () => {
  let newMovie={title,Description,rate,posterUrl}
  add(newMovie)

}
  return (
    <div>
  <Button variant="primary" onClick={handleShow}>
        Add movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add movie</Modal.Title>
        </Modal.Header>
        <p>Title</p>
        <Form.Control type="text" placeholder="title" onChange={(e)=>handleTitle(e)} />
        <Form.Control type="number" placeholder="rate"  onChange={(e)=> handleDescription(e)} />
        <p>Rate</p>
        <Form.Control type="text" placeholder="description" onChange={(e)=>handlerate(e)} />
        <p>Description</p>
        <Form.Control type="url" placeholder=" posterUrl"onChange={(e)=>handleposterUrl(e)} />
        <p>posterUrl</p>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() =>handleAdd()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default AddMovie