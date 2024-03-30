// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

contract cloud{
    string private ipfsHash;

    function saveData(string memory hash) public{
        ipfsHash=hash;
    }

    function getData()public view returns(string memory){
        return ipfsHash;
    }
}