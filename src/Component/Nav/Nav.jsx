import React from "react";

const Nav = () => {
    const toggleDropdown = () =>{
        const dropdownMenu = document.querySelector(".dropdown-menu")
        dropdownMenu.style.display = (dropdownMenu.style.display === 'block') ? 'none' :'block'
      }
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <a className="logo" href="#">
          Start Bootstrap
        </a>

        <button className="navbar-toggler">
          <i className="fa-solid fa-bars"></i>
        </button>

        <div className="nav-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link" onClick={toggleDropdown} href="#">
                Shop <i className="fa-solid fa-sort-down"></i>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    All Produc
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Popular Items
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    New Arrivals
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <form className="d-flex">
            <button className="btn-cart">
              <i className="fa-solid fa-cart-shopping me-1"></i>
              Cart
              <span className="badge">0</span>
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
