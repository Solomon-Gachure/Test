import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const HelpLayout = () => {
  return (
    <div>
        <h2>Website Help</h2>
<p>Welcome to the help section, we devote to ensure first class service with no ineventualities!!</p>
<nav>
    <NavLink link to="faq">View the FAQ</NavLink>
    <NavLink link to="contact">Contact Us</NavLink>

<Outlet/>
</nav>
    </div>
  )
}

export default HelpLayout