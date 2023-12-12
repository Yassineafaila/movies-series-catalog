import React from 'react'
import { Spinner } from 'react-bootstrap'
import "./Loader.scss"
function Loader() {
  return (
    <Spinner animation='border' role='status'></Spinner>
  )
}

export default Loader