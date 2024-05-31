import { ethers } from "/ethers-5.6.esm.min.js";
import upperControlMetadata from "/out/UpperControl.sol/UpperControl.json" with { type: 'json' };
import gameMetadata from "/out/Game.sol/Game.json" with { type: 'json' };

const upperControlABI = upperControlMetadata.abi;
const upperControlAddr = "0xdb4c9Fe64580E173edD5e00725276502d3816F29";
const gameABI = gameMetadata.abi;
const PARTICIPANT_FEE = "0.01";

const connectButton = document.getElementById("connectButton");
const accountText = document.getElementById("account");
const createGameButton = document.getElementById("createGameButton");
const enterGameButton = document.getElementById("enterGameButton");
const gameAddressText = document.getElementById("gameAddress");
const choiceButton = document.getElementById("choiceButton");
const choiceList = document.getElementById('choiceList');
const choiceForm = document.getElementById('choiceForm');

connectButton.onclick = connect;
createGameButton.onclick = createGame;
enterGameButton.onclick = enterGame;
choiceButton.onclick = setPlayerResponse;

let accounts;
let account;
let gameAddress;

async function connect() {
    console.log("Connecting...");

    if (typeof window.ethereum !== "undefined") {
        try {
            await ethereum.request({ method: "eth_requestAccounts" });
        } catch (error) {
            console.log(error);
        }

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const network = await provider.getNetwork();
        accounts = await provider.listAccounts();
        account = ethers.utils.getAddress(accounts[0]);

        accountText.innerHTML = account;

        console.log("Account Connected: ", account);
        console.log("With Chain ID: ", network.chainId);
    } else {
        connectButton.innerHTML = "Please install MetaMask";
    }
}

async function createGame() {
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
            gameAddress = event[0].args.gameAddress;
            const game = new ethers.Contract(gameAddress, gameABI, signer);

            gameAddressText.innerHTML = gameAddress;

            console.log("-- Game Address Created: ", gameAddress);
            console.log("-- Game Entered with Player Address: ", await game.getParticipant(0));
            console.log("Game Creating Finished");
        } catch (error) {
            console.log(error);
            console.log("Game Creating Failed");
        }
    } else {
        createGameButton.innerHTML = "Please install MetaMask";
    }
}

async function enterGame() {
    const gameAddressToJoin = document.getElementById("gameToJoin").value;
    console.log("Entering Game with Game Address... ", gameAddressToJoin);
    
    if (typeof window.ethereum !== "undefined") {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const game = new ethers.Contract(gameAddressToJoin, gameABI, signer);

        try {
            let txResponse = await game.enterGame({
                value: ethers.utils.parseEther(PARTICIPANT_FEE),
            });
            await listenForTxMine(txResponse, provider);

            const block = await provider.getBlockNumber();
            const event = await game.queryFilter("GameJoined", block - 1, block);
            
            console.log("-- Game Entered with Player Address: ", event[0].args.player);
        } catch (error) {
            console.log(error);
            console.log("Game Entering Failed");
        }
    } else {
        createGameButton.innerHTML = "Please install MetaMask";
    }
}

choiceButton.onclick = (event) => {
    event.preventDefault();
    setPlayerResponse();
}

async function setPlayerResponse() {
    const choice = parseInt(choiceList.value);
    console.log("Choice: ", choice)
    console.log("Getting Player Response... ");

    if (typeof window.ethereum !== "undefined") {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const game = new ethers.Contract(gameAddressToJoin, gameABI, signer);

        try {
            let txResponse = await game.setPlayerResponse(choice);
            await listenForTxMine(txResponse, provider);

            const block = await provider.getBlockNumber();
            const event = await game.queryFilter("ResponseSet", block - 1, block);
            
            console.log("-- Player Set Choice: ", event[0].args.choice);
        } catch (error) {
            console.log(error);
            console.log("Choice Set Failed");
        }
    } else {
        createGameButton.innerHTML = "Please install MetaMask";
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
      })
    })
}