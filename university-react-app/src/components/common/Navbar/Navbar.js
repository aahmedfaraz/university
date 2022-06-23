import React from 'react';
import AhmedFarazIcon from '../../../assets/icons/ahmedfaraz-icon.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-light fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand"   target="_blank" href="https://www.linkedin.com/in/aahmed-faraz/">
            <img src={AhmedFarazIcon} alt="" width="30" height="30" className="d-inline-block align-text-top" />
            <span>AHMED FARAZ</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">AHMED FARAZ</h5>
              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" id="close-navbar" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body d"> 
              <form className="d-flex" id="search-form">
                <input className="form-control me-2" type="search" placeholder="Search any student" aria-label="Search" id="search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </div>
      </nav>
  )
}

export default Navbar;