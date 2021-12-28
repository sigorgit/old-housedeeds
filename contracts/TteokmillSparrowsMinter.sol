pragma solidity ^0.5.6;

import "./klaytn-contracts/ownership/Ownable.sol";
import "./klaytn-contracts/math/SafeMath.sol";
import "./klaytn-contracts/token/KIP7/IKIP7.sol";
import "./TteokmillSparrows.sol";
import "./TteokmillSparrowsWhitelist.sol";

contract TteokmillSparrowsMinter is Ownable {
    using SafeMath for uint256;

    TteokmillSparrows public nft;
    TteokmillSparrowsWhitelist public whitelist;
    IKIP7 public ijm;

    constructor(
        TteokmillSparrows _nft,
        TteokmillSparrowsWhitelist _whitelist,
        IKIP7 _ijm
    ) public {
        nft = _nft;
        whitelist = _whitelist;
        ijm = _ijm;
    }

    uint256 public mintPrice = 1000 * 1e8;
    mapping(address => uint256) public mintCounts;

    function setMintPrice(uint256 _price) external onlyOwner {
        mintPrice = _price;
    }

    uint256 public limit;

    function setLimit(uint256 _limit) external onlyOwner {
        limit = _limit;
    }

    function mint(string calldata ment) external {

        require(limit > 0 && bytes(ment).length > 0);
        require(whitelist.whitelist(msg.sender));
        require(mintCounts[msg.sender] < 10);

        uint256 id = nft.totalSupply();
        nft.mint(msg.sender, id);
        nft.setMent(id, ment);
        ijm.transferFrom(msg.sender, address(this), mintPrice);
        mintCounts[msg.sender] = mintCounts[msg.sender].add(1);
        limit = limit.sub(1);
    }

    function withdrawIjm() onlyOwner external {
        ijm.transfer(owner(), ijm.balanceOf(address(this)));
    }
}
