const HDWalletProvider = require("truffle-hdwallet-provider");
require('dotenv').config()
module.exports = {
    networks: {
	development: {
	    host: 'localhost',
	    port: 8545,
		network_id: '*'
	},
	ropsten: {
	    provider: () => new HDWalletProvider(process.env.MNENOMIC, "https://ropsten.infura.io/v3/" + process.env.INFURA_API_KEY),
	    network_id: 3,
	    gas: 3000000,
	    gasPrice: 21
	},
	kovan: {
	    provider: () => new HDWalletProvider(process.env.MNENOMIC, "https://kovan.infura.io/v3/" + process.env.INFURA_API_KEY),
	    network_id: 42,
	    gas: 4000000,
	    gasPrice: 201,
      	nonce: 15
	},
	rinkeby: {
	    provider: () => new HDWalletProvider(process.env.MNENOMIC, "https://rinkeby.infura.io/v3/" + process.env.INFURA_API_KEY),
	    network_id: 4,
	    gas: 3000000,
	    gasPrice: 21
	},
	main: {
	    provider: () => new HDWalletProvider(process.env.MNENOMIC, "https://mainnet.infura.io/v3/" + process.env.INFURA_API_KEY),
	    network_id: 1,
	    gas: 3000000,
	    gasPrice: 21
	}
    }
}
