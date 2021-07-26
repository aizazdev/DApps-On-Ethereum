pragma solidity ^0.5.0;

contract Sample {
    string public myString = "Aizaz";

    function setString(string memory _myString) public {
        myString = _myString;
    }
}