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

    function setMintPrice(uint256 _price) external onlyOwner {
        mintPrice = _price;
    }

    uint256 public limit;

    function setLimit(uint256 _limit) external onlyOwner {
        limit = _limit;
    }

    function mint() external {
        require(limit > 0);
        nft.mint(msg.sender, nft.totalSupply());
        ijm.transferFrom(msg.sender, address(this), mintPrice);
        limit = limit.sub(1);
    }

    function withdrawIjm() onlyOwner external {
        ijm.transfer(owner(), ijm.balanceOf(address(this)));
    }
}
