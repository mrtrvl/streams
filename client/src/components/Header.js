import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <div className="ui secondary pointing menu">
        <Link to="/" className="item">
          Streamer
        </Link>
        <Link to="/streams/new" className="item">
          New
        </Link>
        <Link className="item">
          Messages
        </Link>
        <Link className="item">
          Friends
        </Link>
        <div className="right menu">
          <Link to="/" className="item">
            All Streams
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;