import React from 'react';
import { NavLink } from "react-router-dom";



const Header= () => {
  return(
    <nav>
      
      <ul className="Header">
          
        <li>
            <NavLink activeClassName="active" exact to="/">NGTHome</NavLink>
        </li> 

        <li>
            <NavLink activeClassName="active" exact to="/datas">Datas</NavLink>
        </li>

        <li>
            <NavLink activeClassName="active" exact to="FluctuationRepStaDate">FluctuationRepStaDate</NavLink>
        </li>

        <li>
            <NavLink activeClassName="active" exact to="/FluctuationNbAlertsDate">FluctuationNbAlertsDate</NavLink>
        </li>
      
      </ul>
        
    </nav>
  );
};

export default Header