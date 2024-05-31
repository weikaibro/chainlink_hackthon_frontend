import moment from 'moment';
import React from 'react';
import { useRecoilState } from 'recoil';
import { walletAccount, loggedIn, gameAdd } from '../../state/recoil';
import { ethers } from "../../contract/ethers-5.6.esm.min";
import upperControlMetadata from "../../contract/out/UpperControl.sol/UpperControl.json";
import gameMetadata from "../../contract/out/Game.sol/Game.json";

function Home() {
  const [account, setAccount] = useRecoilState(walletAccount);
  const [logged, setLogged] = useRecoilState(loggedIn);
  // const [gameAddress, setGameAddress] = useRecoilState(gameAdd); // Commented out since not used

  const upperControlABI = upperControlMetadata.abi;
  const upperControlAddr = "0xdb4c9Fe64580E173edD5e00725276502d3816F29";
  const gameABI = gameMetadata.abi;
  const PARTICIPANT_FEE = "0.01";

  async function connect() {
    if (typeof window.ethereum !== "undefined") {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
      } catch (error) {
        console.log(error);
      }

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const network = await provider.getNetwork();
      const accounts = await provider.listAccounts();
      setAccount(ethers.utils.getAddress(accounts[0]));
      setLogged(true);

      console.log("Account Connected: ", account);
      console.log("With Chain ID: ", network.chainId);
    } else {
      document.getElementById("connectButton").innerHTML = "Please install MetaMask";
    }
  }

  async function create() {
    console.log("Game Creating...");

    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const upperControl = new ethers.Contract(upperControlAddr, upperControlABI, signer);

      try {
        let txResponse = await upperControl.createGame({
          value: ethers.utils.parseEther(PARTICIPANT_FEE),
        });
        await listenForTxMine(txResponse, provider);

        upperControl.on("GameCreated", async (gameAddress) => {
          console.log("-- Game Address: ", gameAddress);
        });

        const block = await provider.getBlockNumber();
        const event = await upperControl.queryFilter("GameCreated", block - 1, block);
        let gameAddress = event[0].args.gameAddress; // Use let instead of const
        const game = new ethers.Contract(gameAddress, gameABI, signer);

        console.log("-- Game Address Created: ", gameAddress);
        console.log("-- Game Entered with Player Address: ", await game.getParticipant(0));
        console.log("Game Creating Finished");
      } catch (error) {
        console.log(error);
        console.log("Game Creating Failed");
      }
    } else {
      document.getElementById("connectButton").innerHTML = "Please install MetaMask";
    }
  }

  function listenForTxMine(txResponse, provider) {
    console.log(`Mining ${txResponse.hash}`);
    return new Promise((resolve, reject) => {
      provider.once(txResponse.hash, (transactionReceipt) => {
        console.log(
          `Completed with ${transactionReceipt.confirmations} confirmations. `
        );
        resolve();
      });
    });
  }

  const time = moment().format('HH:mm');
  const date = moment().format('MMM Do YY');
  return (
    <div className="homeborder absolute top-0 left-0 z-0 glass rounded-md h-[700px] p-5 h-full w-full text-white">
      <h1 className="text-7xl font-bold text-white mt-4">Hello There !</h1>
      <h2 className="text-5xl mt-10 text-center text-white">{time}</h2>
      <h3 className="text-2xl text-center text-white">{date}</h3>
      <div className="flex flex-col items-center justify-center mt-4">
        <div className="avatar ">
          <div className="w-24 mask mask-hexagon">
            <img alt='someone' src="https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins/@@images/1a36b305-412d-405e-a38b-0947ce6709ba.jpeg" referrerPolicy="no-referrer" />
          </div>
        </div>
        <p className="text-2xl">Name</p>
        <button
          id="connectButton"
          onClick={logged ? create : connect}
        >
          {logged ? 'Create Game' : 'Connect'}
        </button>
      </div>
    </div>
  );
}

export default Home;
