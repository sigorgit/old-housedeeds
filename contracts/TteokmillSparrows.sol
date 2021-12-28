pragma solidity ^0.5.6;

import "./klaytn-contracts/token/KIP17/KIP17Full.sol";
import "./klaytn-contracts/token/KIP17/KIP17Mintable.sol";
import "./klaytn-contracts/token/KIP17/KIP17Pausable.sol";
import "./klaytn-contracts/ownership/Ownable.sol";

contract TteokmillSparrows is Ownable, KIP17Full("Tteokmill Sparrows", "SPARROWS"), KIP17Mintable, KIP17Pausable {

    event SetMentor(address mentor);

    address public mentor;

    function setMentor(address _mentor) onlyOwner external {
        mentor = _mentor;
        emit SetMentor(_mentor);
    }

    event SetBaseURI(string baseURI);

    string public baseURI = "https://api.tteok.org/sparrows/";

    function setBaseURI(string calldata _baseURI) onlyOwner external {
        baseURI = _baseURI;
        emit SetBaseURI(_baseURI);
    }

    function tokenURI(uint256 tokenId) public view returns (string memory) {
        require(_exists(tokenId), "KIP17Metadata: URI query for nonexistent token");
        
        if (tokenId == 0) {
            return string(abi.encodePacked(baseURI, "0"));
        }

        string memory idstr;
        
        uint256 temp = tokenId;
        uint256 digits;
        while (temp != 0) {
            digits += 1;
            temp /= 10;
        }
        bytes memory buffer = new bytes(digits);
        while (tokenId != 0) {
            digits -= 1;
            buffer[digits] = bytes1(uint8(48 + uint256(tokenId % 10)));
            tokenId /= 10;
        }
        idstr = string(buffer);

        return bytes(baseURI).length > 0 ? string(abi.encodePacked(baseURI, idstr)) : "";
    }

    mapping(uint256 => string) public ments;

    function setMent(uint256 id, string calldata ment) external {
        require(
            isMinter(msg.sender) ||
            msg.sender == mentor ||
            msg.sender == owner()
        );
        ments[id] = ment;
    }
}
