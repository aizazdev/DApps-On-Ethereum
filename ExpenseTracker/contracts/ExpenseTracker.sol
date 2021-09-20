// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract ExpenseTracker {

    struct Transaction {
        string transactionDescription;
        int price;
        address transactionOwner;
    }

    Transaction[] public transactions;

    function setTransaction(string memory _description, int _price ) public {
        Transaction memory transaction = Transaction(_description, _price, msg.sender);
        transactions.push( transaction );
    }

    function count() public view returns( uint ) {
        return transactions.length;
    }
 
 }