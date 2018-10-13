pragma solidity 0.4.24;

contract Contract1 {
    address public owner;
    event AddressVerifiedEvent(address indexed _address);

    constructor() public {
        owner = msg.sender;
    }
    function kill() external {
        require(msg.sender == owner, "Only the owner can kill this contract");
        selfdestruct(owner);
    }
    function verifyAddressFromTypedSign(bytes _sign, string _mesg, uint _num, address _address) public pure returns (bool) {
        // need to hardcode exactly how the types in the signTypedData are
        bytes32 typeHash = keccak256(abi.encodePacked('string Message', 'uint256 num'));
        bytes32 valueHash = keccak256(abi.encodePacked(_mesg, _num));
        return recover(keccak256(abi.encodePacked(typeHash, valueHash)), _sign) == _address;
    }
    function verifyAddressFromTypedSignWithEvent(bytes _sign, string _mesg, uint _num, address _address) public returns (bool) {
        // need to hardcode exactly how the types in the signTypedData are
        bytes32 typeHash = keccak256(abi.encodePacked('string Message', 'uint256 num'));
        bytes32 valueHash = keccak256(abi.encodePacked(_mesg, _num));
        bool verified = (recover(keccak256(abi.encodePacked(typeHash, valueHash)), _sign) == _address);
        if(verified)
            emit AddressVerifiedEvent(_address);
        return verified;
    }
    function verifyAddressFromWeb3Sign(bytes sign, bytes32 signedMessage, address _address) public pure returns(bool) {
        return recover(signedMessage, sign) == _address; // works with web3.eth.sign
    }
    function verifyAddressWeb3SignElements(bytes32 signedMessage, uint8 v, bytes32 r, bytes32 s, address _address) public pure returns(bool) {
        return ecrecover(signedMessage, v, r, s) == _address; // works with web3.eth.sign
    }

    //ECDSA.sol functions
    function recover(bytes32 hash, bytes signature) internal pure returns (address)
    {
        bytes32 r;
        bytes32 s;
        uint8 v;

        (v, r, s) = splitSignature(signature);

        // Version of signature should be 27 or 28, but 0 and 1 are also possible versions
        if (v < 27) {
            v += 27;
        }

        // If the version is correct return the signer address
        if (v != 27 && v != 28) {
            return (address(0));
        } else {
            // solium-disable-next-line arg-overflow
            return ecrecover(hash, v, r, s);
        }
    }
    function splitSignature(bytes sig) internal pure returns (uint8, bytes32, bytes32)
    {
        require(sig.length == 65);

        bytes32 r;
        bytes32 s;
        uint8 v;

        assembly {
            // first 32 bytes, after the length prefix
            r := mload(add(sig, 32))
            // second 32 bytes
            s := mload(add(sig, 64))
            // final byte (first byte of the next 32 bytes)
            v := byte(0, mload(add(sig, 96)))
        }
        return (v, r, s);
    }


    /**
    * toEthSignedMessageHash
    * @dev prefix a bytes32 value with "\x19Ethereum Signed Message:"
    * and hash the result
    */
    function toEthSignedMessageHash(bytes32 hash) internal pure returns (bytes32)
    {
        // 32 is the length in bytes of hash,
        // enforced by the type signature above
        return keccak256(
            abi.encodePacked("\x19Ethereum Signed Message:\n32", hash)
        );
    }
    
    function hardcoded_recover(string message, uint8 v, bytes32 r, bytes32 s) public pure returns (address) {
        return ecrecover(doHash(message), v, r, s);
    }
    function doHash(string message) internal pure returns (bytes32) {
        return keccak256(abi.encodePacked(message));
    }
}
