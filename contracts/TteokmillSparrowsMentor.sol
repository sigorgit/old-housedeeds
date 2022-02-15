pragma solidity ^0.5.6;

import "./klaytn-contracts/ownership/Ownable.sol";
import "./klaytn-contracts/math/SafeMath.sol";
import "./klaytn-contracts/token/KIP7/IKIP7.sol";
import "./klaytn-contracts/token/KIP37/KIP37Burnable.sol";
import "./TteokmillSparrows.sol";

contract TteokmillSparrowsMentor is Ownable {
    using SafeMath for uint256;

    TteokmillSparrows public nft;
    IKIP7 public ijm;
    KIP37Burnable public ticket;
    uint256 public price = 100 * 1e18;
    address public feeTo;

    constructor(
        TteokmillSparrows _nft,
        IKIP7 _ijm,
        KIP37Burnable _ticket,
        address _feeTo
    ) public {
        nft = _nft;
        ijm = _ijm;
        ticket = _ticket;
        feeTo = _feeTo;
    }

    function setPrice(uint256 _price) onlyOwner external {
        price = _price;
    }

    function setFeeTo(address _feeTo) onlyOwner external {
        feeTo = _feeTo;
    }

    function changeMent(uint256 id, string calldata ment) external {
        require(nft.ownerOf(id) == msg.sender);
        nft.setMent(id, ment);
        uint256 priceToOwner = price.div(10);
        ijm.transferFrom(msg.sender, owner(), priceToOwner);
        ijm.transferFrom(msg.sender, feeTo, price.sub(priceToOwner));
    }

    function changeMentUsingTicket(uint256 id, string calldata ment) external {
        require(nft.ownerOf(id) == msg.sender);
        nft.setMent(id, ment);
        ticket.burn(msg.sender, 0, 1);
    }
}
