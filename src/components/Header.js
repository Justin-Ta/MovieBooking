import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header/header.css'

export default function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-success">
                <div className="container">
  <NavLink className="navbar-brand" to="/">Cybersoft</NavLink>
  <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
  <div className="collapse navbar-collapse" id="collapsibleNavId">
    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <NavLink exact className="nav-link" to="/" activeClassName="activeMenuItem">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about" activeClassName="activeMenuItem">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/contact" activeClassName="activeMenuItem">Contact</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/login" activeClassName="activeMenuItem">Login</NavLink>
      </li>
    </ul>
    {/* <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="text" placeholder="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
  </div>
  </div>
</nav>

        </div>
    )
}
