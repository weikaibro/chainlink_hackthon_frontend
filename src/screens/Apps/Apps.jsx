import React from 'react';
import { Link } from 'react-router-dom';

function Apps() {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      <Link to="/exchange">
        <div className="avatar">
          <div className="w-16 mask mask-squircle">
            <img src="/assets/images/weather-app.jpg" alt="Exchange App" />
          </div>
        </div>
      </Link>
      <Link to="/mail">
        <div className="avatar">
          <div className="w-16 mask mask-squircle">
            <img src="/assets/images/calculator.png" alt="Mail App" />
          </div>
        </div>
      </Link>
      <Link to="/text">
        <div className="avatar">
          <div className="w-16 mask mask-squircle">
            <img src="/assets/images/notes.jpg" alt="Text App" />
          </div>
        </div>
      </Link>
      <Link to="/news">
        <div className="avatar">
          <div className="w-16 mask mask-squircle">
            <img src="/assets/images/funny.jpg" alt="News App" />
          </div>
        </div>
      </Link>
      {/* <Link to="/cryptoapp">
        <div className="avatar">
          <div className="w-16 mask mask-squircle">
            <img src="/assets/images/cryptoapp.png" alt="Jokes App" />
          </div>
        </div>
      </Link> */}
    </div>
  );
}

export default Apps;
