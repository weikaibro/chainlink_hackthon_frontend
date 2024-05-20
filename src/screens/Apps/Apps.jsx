import React from 'react';
import { Link } from 'react-router-dom';

function Apps() {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      <Link to="/weather">
        <div className="avatar">
          <div className="w-16 mask mask-squircle">
            <img src="/assets/images/weather-app.jpg" alt="weather App" />
          </div>
        </div>
      </Link>
      <Link to="/calculator">
        <div className="avatar">
          <div className="w-16 mask mask-squircle">
            <img src="/assets/images/calculator.png" alt="Calculator App" />
          </div>
        </div>
      </Link>
      <Link to="/notes">
        <div className="avatar">
          <div className="w-16 mask mask-squircle">
            <img src="/assets/images/notes.jpg" alt="Notes App" />
          </div>
        </div>
      </Link>
      <Link to="/jokes">
        <div className="avatar">
          <div className="w-16 mask mask-squircle">
            <img src="/assets/images/funny.jpg" alt="Jokes App" />
          </div>
        </div>
      </Link>
      <Link to="/cryptoapp">
        <div className="avatar">
          <div className="w-16 mask mask-squircle">
            <img src="/assets/images/cryptoapp.png" alt="Jokes App" />
          </div>
        </div>
      </Link>
      {/* //TODO: Add more apps here */}
      {/* <Link to="/tictactoe">
        <div className="avatar">
          <div className="w-16 mask mask-squircle">
            <img src="/assets/images/tiktak.jpg" alt="tictactoe App" />
          </div>
        </div>
      </Link> */}

    </div>
  );
}

export default Apps;
