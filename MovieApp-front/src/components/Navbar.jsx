// import React, { Component } from "react";
// import logo from "../photos/logo.jpg";
// import "./Navbar.css";
// import { useNavigate } from "react-router-dom";

// export default class Navbar extends Component {
//   render() {
//     return (
//       <>
//         <div class="container">
//           <nav>
//             <span class="nav-toggle" id="js-nav-toggle">
//               <i class="fas fa-bars"></i>
//             </span>
//             <div class="logoo">
//               <img id="logoo" src={logo} alt="horse" width={120} />
//             </div>
//             <div className="menu">
//               <div class="dropdown">
//                 <button class="dropdown-btn">Movies</button>
//                 <div class="dropdown-content">
//                   <a href="#">Upcoming releases</a>
//                   <a href="#">Top 100 Movies</a>
//                   <a href="#">Most popular movies</a>
//                   <a href="#">Top Box Office</a>
//                 </div>
//               </div>

//               <div class="dropdown">
//                 <button class="dropdown-btn">Tv Shows</button>
//                 <div class="dropdown-content">
//                   <a href="#">Upcoming releases</a>
//                   <a href="#">Top 100 Tv Shows</a>
//                   <a href="#">Most popular Tv Shows </a>
//                 </div>
//               </div>

//               <div class="dropdown">
//                 <button class="dropdown-btn">Awards and Events</button>
//                 <div class="dropdown-content">
//                   <a href="#">Oscars</a>
//                   <a href="#">Emmys</a>
//                 </div>
//               </div>

//               <div class="dropdown">
//                 <button class="dropdown-btn">Tv Shows</button>
//                 <div class="dropdown-content">
//                   <a href="#">Upcoming releases</a>
//                   <a href="#">Top 100 Tv Shows</a>
//                   <a href="#">Most popular Tv Shows </a>
//                 </div>
//               </div>
//             </div>

//             <ul id="js-menu">
//               {/* <li>SignUp</li>
//               <li>Login</li> */}
//               <li onClick={() => this.props.navigation.navigate("Login")}>
//                 Logout
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </>
//     );
//   }
// }

import React from "react";
import logo from "../photos/logo.jpg";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import Slidermovie from "./Slidermovie.jsx";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <div class="container">
        <nav className="nav">
          <span class="nav-toggle" id="js-nav-toggle">
            <i class="fas fa-bars"></i>
          </span>
          <div class="logoo">
            <img id="logoo" src={logo} alt="horse" width={120} />
          </div>
          <div className="menu">
            <div class="dropdown">
              <button class="dropdown-btn">Movies</button>
              <div class="dropdown-content">
                <a href="#">Upcoming releases</a>
                <a href="#">Top 100 Movies</a>
                <a href="#">Most popular movies</a>
                <a href="#">Top Box Office</a>
              </div>
            </div>

            <div class="dropdown">
              <button class="dropdown-btn">Tv Shows</button>
              <div class="dropdown-content">
                <a href="#">Upcoming releases</a>
                <a href="#">Top 100 Tv Shows</a>
                <a href="#">Most popular Tv Shows </a>
              </div>
            </div>

            <div class="dropdown">
              <button class="dropdown-btn">Awards and Events</button>
              <div class="dropdown-content">
                <a href="#">Oscars</a>
                <a href="#">Emmys</a>
              </div>
            </div>

            <div class="dropdown">
              <button class="dropdown-btn">Tv Shows</button>
              <div class="dropdown-content">
                <a href="#">Upcoming releases</a>
                <a href="#">Top 100 Tv Shows</a>
                <a href="#">Most popular Tv Shows </a>
              </div>
            </div>
          </div>

          <ul id="js-menu">
            {/* <li>SignUp</li>
          <li>Login</li> */}
            <li  id="logout" onClick={() => navigate("/Login")}>Logout</li>
          </ul>
        </nav>
      </div>
      <div>
        <Slidermovie />
      </div>
    </>
  );
}
