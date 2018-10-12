<template>
<div>
	<h1>Signing Examples</h1>
	<button @click="ethSignTypedData">Sign with eth_signTypedData</button>
    <button @click="web3EthSign">Sign with web3_eth_sign</button>
</div>
</template>

<script>
import {abi} from './test_abi'
export default {
    data () {
        return {
            myAddress: '',
            myContract: '',
			isInitialized: false
        }
    },
	  methods: {
		async ethSignTypedData () {
            await this.initContract();
            this.signTypedData()
        },
        async web3EthSign() {
            await this.initContract();
            this.signWeb3Eth()
		},
        async initContract () {
            if( !this.isInitialized ) {
                var address = '0x824ae48ef2c6271b91789218a032f17d1c1dd36d' // use the latest contract address
                var Web3 = require('web3')
                web3 = new Web3(web3.currentProvider);
                this.myAddress = web3.eth.accounts[0]
                var MyContract = web3.eth.contract(abi)
                this.myContract = MyContract.at(address)
                this.isInitialized = true
            }
		},
        async signTypedData() {
            var ethUtil = require('ethereumjs-util')
            var msg1 = "heeeyyyy!"
            var num1 = 46
            var msgParams = [
            {
                type: 'string',
                name: 'Message',
                value: msg1
            },
            {  
                type: 'uint256', 
                name:'num', 
                value: num1
                }
            ]
            var from = this.myAddress;
            var params = [msgParams, from]
            var method = 'eth_signTypedData'

            var instance = this
            web3.currentProvider.sendAsync({
                method,
                params,
                from,
            }, function (err, result) {
                if (err) return console.dir(err)
                if (result.error) {
                    alert(result.error.message)
                }
                let sign = result.result
                console.log('EthSignTyped SIGNED:' + JSON.stringify(sign))
                instance.myContract.verifyAddressFromTypedSign(sign, msg1, num1, from, function(err1, res1) {
                    console.log("res1 from verifyAddressFromTypedSign: " + res1)
                    // if the flow reaches here, do the task that needs to be done with the params passed.
                })
            })
        },
        async signWeb3Eth() {
            var message = web3.sha3('Hello World');
            var from = this.myAddress;
            var instance = this
            web3.eth.sign(from, message, function(e, res) {
                // the following is by passing the complete siignature into the verification smart contract.
                instance.myContract.verifyAddressFromWeb3Sign(res, message, from, function(err1, res1) {
                    console.log("res1 from verifyAddressFromWeb3Sign: " + res1)
                })
                var signature = res.substr(2); //remove 0x
                const r = '0x' + signature.slice(0, 64)
                const s = '0x' + signature.slice(64, 128)
                const v = '0x' + signature.slice(128, 130)
                const v_decimal = web3.toDecimal(v)
                // the following is by passing v, r and s separately into the verification smart contract.
                instance.myContract.verifyAddressWeb3SignElements(message, v_decimal, r, s, from, function(err1, res1) {
                    console.log("res1 from verifyAddressWeb3SignElements: " + res1)
                })
            })
        }
    }
}
</script>