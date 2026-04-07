import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Menu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm py-3">
        <div className="container">
            <NavLink className="navbar-brand fw-bold text-primary fs-4" to="/">BrandName</NavLink>
            
            <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" 
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fw-medium">
                    <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/courses">Courses</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/students">Students</NavLink>
                    </li>
                </ul>
                
                <div className="d-flex align-items-center gap-3">
                    <a type="button" className="text-decoration-none text-muted fw-medium">Log Out</a>
                </div>
            </div>
        </div>
    </nav>
  )
}
