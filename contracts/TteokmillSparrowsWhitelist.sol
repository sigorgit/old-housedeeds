pragma solidity ^0.5.6;

import "./klaytn-contracts/ownership/Ownable.sol";

contract TteokmillSparrowsWhitelist is Ownable {

    mapping(address => bool) public added;
    mapping(address => bool) public whitelist;

    function add(address addr) external {
        require(added[msg.sender] != true);
        added[msg.sender] = true;
        whitelist[addr] = true;
    }

    function forceCancel(address addr) onlyOwner() external {
        whitelist[addr] = false;
    }
}
