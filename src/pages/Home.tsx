import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="tigerhall-navigation">
      <h1>Homepage</h1>
      <ul>
        <li>
          <Link to="/framethree">FrameThree</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
