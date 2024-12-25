// npm list react react-dom

// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Login from "./components/Login";
// import Navbar from "./components/Navbar";
// import Signup from "./components/Signup";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route index element={<App />} />
//         <Route path="Login" element={<Login />} />
//         <Route path="Navbar" element={<Navbar />} />
//         <Route path="Signup" element={<Signup />} />
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="Login" element={<Login />} />
        <Route path="Navbar" element={<Navbar />} />
        <Route path="Signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
