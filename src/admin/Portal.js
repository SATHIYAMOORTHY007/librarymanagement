import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './portal.css'
import { Outlet } from 'react-router-dom'
import { BrowserRouter, Link } from 'react-router-dom'

function Portal() {
  return (
    <div className="navbar-light">
      <div class="menu-container ">
        <nav class="navbar navbar-light bg-light">
          <Link class="navbar-brand" to="/portal/home">
            Home
          </Link>
          <Link class="navbar-brand" to="/portal/table">
            Books List
          </Link>
          <Link class="navbar-brand bg-danger " to="/">
            LogOut
          </Link>
        </nav>

        <div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  )
}

export default Portal
