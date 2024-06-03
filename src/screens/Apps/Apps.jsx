import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../../assets/exchange.jpg';
import image2 from '../../assets/mail.jpg';
import image3 from '../../assets/text.jpg';
import image4 from '../../assets/news.jpg';


function Apps() {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      <Link to="/apps/exchange">
        <div className="flex flex-col avatar">
          <div className="w-16 mask mask-squircle">
            <img src={image1} alt="Exchange App" />
          </div>
          <div className="text-center">Exchange</div>
        </div>
      </Link>
      <Link to="/apps/mail">
        <div className="flex flex-col avatar">
          <div className="w-16 mask mask-squircle">
            <img src={image2} alt="Mail App" />
          </div>
          <div className="text-center">Mail</div>
        </div>
      </Link>
      <Link to="/apps/text">
        <div className="flex flex-col avatar">
          <div className="w-16 mask mask-squircle">
            <img src={image3} alt="Text App" />
          </div>
          <div className="text-center">Text</div>
        </div>
      </Link>
      <Link to="/apps/news">
        <div className="flex flex-col avatar">
          <div className="w-16 mask mask-squircle">
            <img src={image4} alt="News App" />
          </div>
          <div className="text-center">News</div>
        </div>
      </Link>
    </div>
  );
}

export default Apps;
