import React from "react";
import { Link } from "react-router-dom";

function ManagerList() {
  return (
    <div>
      <h1>Manager's List</h1>
      <ul>
        <li>Manager 1</li>
        <button>
          <Link to="/empList">Click</Link>
        </button>
        <li>Manager 2</li>
        <button>
          <Link to="/empListTwo">Click</Link>
        </button>

        <li>Manager 3</li>
        <button>
          <Link to="/empListThree">Click</Link>
        </button>
      </ul>
    </div>
  );
}

export default ManagerList;
