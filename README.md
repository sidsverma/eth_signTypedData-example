# eth_signTypedData-example
Data signed using eth_signTypedData and verified in smart contract with ecrecover using ECDSA.sol.

A simple example in which eth_signTypedData is used to sign some data via MetaMask and the signed message is verified inside the smart contract. This also includes signing via web3.eth.sign and verifying inside the smart contract.

Do note that eth_signTypedData is now deprecated in favor of the standard as defined in EIP-712. See https://git.io/fNzPl for more information on the new standard.

Tools used: web3@0.20.7, truffle, metamask, vue
