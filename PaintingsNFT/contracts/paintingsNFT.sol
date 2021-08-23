pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract PaitingsNFT is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenId;
    using SafeMath for uint256;

    using SafeMath for uint256;
    PAINTING[] public paint;
    struct PAINTING {
        string name;
        uint256 tokenId;
        string desciption;
        uint256 price;
        address owner;
        string imageHash;
    }
    string n;    
    mapping(uint256 => address) public paintingToOwner;
    mapping(address => uint256) public ownerPaintingCount;

    event paintingAdded(string name, uint256 price, string imageHash, string desciption);
    
    constructor() public ERC721("PaintingNFT", "PNFT") {}
    
    function addPainting( string memory _name, uint256 _price, string memory _imageHash, string memory _description ) public {
        uint256 paintingId = paint.length;
        PAINTING memory newPainting;
        _tokenId.increment();
        uint256 newItemId = _tokenId.current();
        newPainting.name = _name;
        newPainting.tokenId = newItemId;
        newPainting.desciption = _description;
        newPainting.price = _price;
        newPainting.owner = msg.sender;
        newPainting.imageHash = _imageHash;
        paint.push(newPainting);
        paintingToOwner[newItemId] = msg.sender;
        ownerPaintingCount[msg.sender].add(1);
        _safeMint(msg.sender, newItemId);
        
        emit paintingAdded(_name, _price, _imageHash, _description);
    } 
    
    function getPaintingById(uint _id) view public returns(string memory _name, uint _price, string memory _imageHash, string memory _description) {
        PAINTING memory p = paint[_id];
        return( 
            p.name,
            p.price,
            p.imageHash, 
            p.desciption
            );
    }

    function printingsCount()  view public returns(uint) {
        return paint.length;
    }
    function name(string memory _n) public {
        n = _n;
    }    
    function getName() public view returns(string memory) {
        return n;
    }
}
