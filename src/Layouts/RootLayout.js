import React from 'react'
import {Link,NavLink,Outlet} from 'react-router-dom'
const RootLayout = () => {
  return (
    <div>
        <header>
     <nav>
        <h1>Trials</h1>
<Link to="/">Home</Link>
        <NavLink to="about">About</NavLink>
        <NavLink to="help">Help</NavLink>

      </nav>
    </header>
    <main>
        <Outlet/>
    </main>
    </div>
  )
}

export default RootLayout