import { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="Navbar-logo">Sibu.</h1>

        <div className="menu-icons" onClick={this.handleclick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li>
                <link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
