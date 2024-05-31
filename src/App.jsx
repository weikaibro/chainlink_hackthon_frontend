// import React from 'react';
// import './App.css';
// import { RecoilRoot } from 'recoil';


// import { ethers } from "./contract/ethers-5.6.esm.min";
// import upperControlMetadata from "./contract/out/UpperControl.sol/UpperControl.json";
// import gameMetadata from "./contract/out/Game.sol/Game.json";

// const upperControlABI = upperControlMetadata.abi;
// const upperControlAddr = "0xdb4c9Fe64580E173edD5e00725276502d3816F29";
// const gameABI = gameMetadata.abi;
// const PARTICIPANT_FEE = "0.01";

// let accounts;
// let account;
// let gameAddress;

// function CoolGame() {

//   return (
//     <div style={{ textAlign: 'center' }}>
//       <button id="connectButton" onClick={connect}>Connect</button>
//       <label id="account">No account connected yet</label>
//       <br />
//       <br />

//       <button id="createGameButton">Create Game</button>
//       <label id="gameAddress">Created game will be shown here</label>
//       <br />
//       <br />

//       <input id="gameToJoin" placeholder="Enter game address: 0x..." />
//       <button id="enterGameButton">Enter Game</button>
//       <br />
//       <br />

//       <form id="choiceForm">
//         <label>Choose your way:</label>
//         <select id="choiceList">
//           <option value="0">No Action</option>
//           <option value="1">Yes</option>
//           <option value="2">No</option>
//         </select>
//         <br />
//         <br />
//         <input type="submit" id="choiceButton" value="Submit" />
//       </form>
//     </div>
//   );
// }

// function App() {
//   return (
//     <RecoilRoot>
//       <CoolGame />
//     </RecoilRoot>
//   );
// }

// export default App;



// import logo from './logo.svg';
import './App.css';

import { useRoutes } from 'react-router-dom';
// import { AuthContextProvider } from './config/Auth/context';
import Layout from './config/Layout/Layout';
import routesConfig from './config/routes';
// import { UserDataProvider } from './config/UserData/storage';
import { RecoilRoot } from 'recoil';

function App() {
  const routes = useRoutes(routesConfig);
  return (
    <>
      <RecoilRoot>
        <Layout>
            {routes}
        </Layout>
      </RecoilRoot>
    </>
  );
}

export default App;
