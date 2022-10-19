import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'; 
import { LogoutButton } from './Logout';

const Navbar = () => {


    return(
       <div>       
          <nav className="navbar bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="../img/logo.png">REACT AND MORTY APP</a>
                <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-outline-success" type="submit">Search</button>
                  <LogoutButton />
                </form>
            </div>
         </nav>
       
      </div>   
      
         );
    }

    export default Navbar;

    // <button className="btn btn-outline-success mx-2" type="submit"  onClick={() => logout({ returnTo: window.location.origin })} >Logout</button>