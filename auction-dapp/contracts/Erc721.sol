pragma solidity >=0.5.0 <= 0.7.0;
    
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract CarNFT is ERC721 {
    Counters.Counter private counter;
    constructor() public ERC721("CARNFT", "CN") {}
    uint256 private tokenId;
    event checkURI(uint256);
    function registerCar(string uri) public returns(uint256){
        tokenId = counter.increment();
        _safeMint(msg.sender, tokenId);
        return tokenId;
    }
    
    function registerURI() public {
        tokenURI(tokenId);
        emit checkURI(tokenId);
    }
}