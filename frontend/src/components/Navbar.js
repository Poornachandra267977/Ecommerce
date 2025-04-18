import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">

    <Link className="navbar-brand" href="#">
      <img src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Myntra_Logo.png" alt="" width="100" height="50"/>
    </Link>


    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/Men">Men</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/Women">Women</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/Kids">Kids</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/Living">Living</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/Beauty">Beauty</Link>
        </li>
        
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <Link to="/cart" className="ms-3">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjSuLsFl0mqTXkw_ucuXt9YTIfUXqh-ejhnVQSg-cgoISxB7DBNvLLdG-lxW_6v5l-_ig&usqp=CAU"
                alt="Bag"
                width="40"
                height="40"
                style={{ marginRight: '10px' }}
              />
            </Link>
    </div>
  </div>
</nav>
<Outlet/>
    </div>
  )
}

export default Navbar