import React from 'react'
import Home2 from './TextArea'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" style={{ color: props.mode === 'light' ? 'black' : 'white' }} to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active"style={{ color: props.mode === 'light' ? 'black' : 'white' }} aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link"style={{ color: props.mode === 'light' ? 'black' : 'white' }} to="/about">{props.about}</Link>
            </li>

          </ul>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" type="checkbox" role="switch" onClick={props.switchh} id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode==="light"? "Enable Dark mode": "Disable Dark mode"}</label>
          </div>
        </div>
      </div>
    </nav>

  )
}

Navbar.prototype = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired
}

// Navbar.defaultProps = {
//   title: 'Sharath',
//   about:'aboutext'
// };

