import React from 'react';
import { NavLink } from "react-router-dom";



const Header= () => {
  return(
    <nav>
      
      <ul className="Header">
        <li>
          <NavLink activeClassName="active" exact to="">GlobalVisualisation</NavLink>
        </li>
        <li>
         <NavLink activeClassName="active" exact to="/NbAlertVisibility">NbAlertVisibility</NavLink>     
        </li>
          
        <li>
            <NavLink activeClassName="active" exact to="/ReportStatusVisibility">ReportStatusVisibility</NavLink>
        </li> 

        <li>
        <NavLink activeClassName="active" exact to="/Dashboard">Dashboard</NavLink>
        </li>
        
      
      </ul>
        
    </nav>
  );
};

export default Header