import moment from 'moment';
import React, { useContext } from 'react';
import { BsGithub } from 'react-icons/bs';

// import { AuthContext } from '../../config/Auth/context';

function Home() {
  const time = moment().format('HH:MM');
  const date = moment().format('MMM Do YY');
  // const user = useContext(AuthContext).currentUser;
  return (

    <div className="homeborder absolute top-0 left-0 z-0 glass rounded-md h-[700px] p-5 h-full w-full text-white">
      <h1 className=" text-7xl font-bold text-white mt-4">Hello There !</h1>
      <h2 className=" text-5xl mt-10 text-center text-white">{time}</h2>
      <h3 className=" text-2xl text-center text-white">{date}</h3>
      <div className=" flex flex-col items-center justify-center mt-4">
        <div className="avatar ">
          <div className="w-24 mask mask-hexagon">
            {/* <img alt={user.name || ''} src={user.image} referrerPolicy="no-referrer" /> */}
            <img alt='someone' src="https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins/@@images/1a36b305-412d-405e-a38b-0947ce6709ba.jpeg" referrerPolicy="no-referrer" />
          </div>
        </div>
        <p className="text-2xl">Name</p>
        <a href="https://github.com/ichala/web-phone" target="_blank" className="btn gap-2 mt-10 rounded uppercase" rel="noreferrer">
          <BsGithub size={20} />
          Source Code
        </a>
      </div>
    </div>
  );
}

export default Home;
