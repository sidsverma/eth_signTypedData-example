# eth_signTypedData-example
Data signed using eth_signTypedData and verified in smart contract with ecrecover using ECDSA.sol.

A simple example in which eth_signTypedData is used to sign some data via MetaMask and the signed message is verified inside the smart contract. This also includes signing via web3.eth.sign and verifying inside the smart contract.

Steps to follow to run this contract in your mac:
1. Clone this repo.
2. In your terminal, go to the folder in which you have cloned this repo.
3. Run 'npm install' - ensure that you have npm installed.
4. Run 'truffle compile' - ensure that you have truffle installed.
5. Run 'truffle migrate --reset --network development' - ensure that you have ganache installed and setup for deploying in the development environment. More info in the footer.*
6. Copy the address of Contract1 from the terminal and paste it in var address of the initContract() function in client/src/components/Signing.vue.
7. Go to the client/ folder and run: 'npm install' & then 'npm start' - this will display the URL & port number on which your UI will be available.
8. Go to http://localhost:<port>/ in your browser(port number should be the one noted above).
9. Make sure you are in the correct metamask setting and open console.
10. Click on the buttons on the screen and check the output in the console. It should display 'true'.

Do note that eth_signTypedData is now deprecated in favor of the standard as defined in EIP-712. See https://git.io/fNzPl for more information on the new standard.

Tools used: nodejs, npm, web3@0.20.7, truffle, metamask, vue, ganache, VS Code

Misc:
Install VS Code with the following extensions:
solidity - by juan blanco
vetur - by pine wu
material icon theme - by philipp kief

*You can also run it in the kovan network. Check in your truffle.js and change the config the way you want it. Ensure that you have set up the correct env variables:
export MNENOMIC="your metamasks recovery 12 words"
export INFURA_API_KEY="your infura api key"
