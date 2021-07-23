pragma solidity >=0.5.0 <= 0.7.0;

contract Adoption {
    address[16] public adoption;

    function adopt(uint id) public returns(uint) {
        require(id >= 0 && id <= 16, "Pets need to be less than 16");
        adoption[id] = msg.sender;
        return id;
    }

    function adopters() public returns(address[16] memory) {
        return adoption;
    }
}