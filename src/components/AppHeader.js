import React from "react";
import { Link } from "react-router-dom";

function AppHeader() {
  return (
    <header>
      <ul>
        <li>
          <Link to='/'>홈</Link>
        </li>
        <li>
          <Link to='/about'>소개</Link>
        </li>
        <li>
          <Link to='/projects'>프로젝트</Link>
        </li>
      </ul>
    </header>
  );
}

export default AppHeader;
