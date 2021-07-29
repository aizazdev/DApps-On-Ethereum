pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract DeedRepository is ERC721Token {
    constructor(string _name,  string _symbol) public ERC721Token(_name, _symbol) {]}
}