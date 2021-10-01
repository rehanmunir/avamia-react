import React, {useState} from 'react';
import { useAuthDataContext } from 'app/providers/AuthProvider';
import { useHistory } from "react-router-dom"
import "./Header.scss"

const Header = () => {
    const { onLogout } = useAuthDataContext();
    const history = useHistory()

    const handleLogout = () => {
        onLogout()
    }

  return (
      <header className="header-items">
        <nav>
            <ul onClick={() => history.push("/companies")}>
                <li>COMPANIES</li>
            </ul>
        </nav>
        <div className="logo">
            AVAMIA
        </div>
        <nav>
            <ul onClick={handleLogout}>
                <li>SIGN OUT</li>
            </ul>
        </nav>
    </header>
  )
}

export default Header;