import React from 'react'
import { Link } from 'react-router-dom'


const Error = () => {
  return (
    <div>
        <h2>Oops!Page not Found!</h2>
        <p>Sorry about that, however you can visit our <Link to="/">Homepage.</Link></p>
        
    </div>
  )
}

export default Error