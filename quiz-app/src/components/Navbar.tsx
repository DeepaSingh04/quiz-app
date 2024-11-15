import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => (
  <nav>
    <ul>
      <li><Link to="/">Quiz Setup</Link></li>
      <li><Link to="/quiz">Quiz Page</Link></li>
      <li><Link to="/leaderboard">Leaderboard</Link></li>
    </ul>
  </nav>
);

export default Navbar;
