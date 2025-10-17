import React from 'react'
import { NavLink } from 'react-router-dom'

export function Navbar({links = []}) {

    const navLinks = links.map((lien, index) => <NavLink key={index} to={lien.path}>{lien.label}</NavLink>)
  return (
    <nav>
        {navLinks}
    </nav>
  )
}
