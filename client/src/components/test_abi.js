const abi = [
  {
    "constant": true,
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "kill",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_sign",
        "type": "bytes"
      },
      {
        "name": "_mesg",
        "type": "string"
      },
      {
        "name": "_num",
        "type": "uint256"
      },
      {
        "name": "_address",
        "type": "address"
      }
    ],
    "name": "verifyAddressFromTypedSign",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "sign",
        "type": "bytes"
      },
      {
        "name": "signedMessage",
        "type": "bytes32"
      },
      {
        "name": "_address",
        "type": "address"
      }
    ],
    "name": "verifyAddressFromWeb3Sign",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "signedMessage",
        "type": "bytes32"
      },
      {
        "name": "v",
        "type": "uint8"
      },
      {
        "name": "r",
        "type": "bytes32"
      },
      {
        "name": "s",
        "type": "bytes32"
      },
      {
        "name": "_address",
        "type": "address"
      }
    ],
    "name": "verifyAddressWeb3SignElements",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "message",
        "type": "string"
      },
      {
        "name": "v",
        "type": "uint8"
      },
      {
        "name": "r",
        "type": "bytes32"
      },
      {
        "name": "s",
        "type": "bytes32"
      }
    ],
    "name": "hardcoded_recover",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "pure",
    "type": "function"
  }
]
export {abi}