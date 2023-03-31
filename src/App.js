// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edited <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
import ManagerList from "./components/ManagerList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmpList from "./components/EmpList";
import EmpListTwo from "./components/EmpListTwo";
import EmpListThree from "./components/EmpListThree";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ManagerList />} />
          <Route path="empList" element={<EmpList />} />
          <Route path="empListTwo" element={<EmpListTwo />} />
          <Route path="empListThree" element={<EmpListThree />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
