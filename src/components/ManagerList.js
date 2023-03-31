import React from "react";
import { Link } from "react-router-dom";

function ManagerList() {
  return (
    <div>
      <h1>Manager's List</h1>
      <ul>
        <li>Manager 1</li>
        <button>
          <Link to="/empList">Enter</Link>
        </button>
        <li>Manager 2</li>
        <button>
          <Link to="/empListTwo">Enter</Link>
        </button>

        <li>Manager 3</li>
        <button>
          <Link to="/empListThree">Enter</Link>
        </button>
      </ul>
    </div>
  );
}

export default ManagerList;
