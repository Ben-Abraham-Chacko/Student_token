// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ClubToken is ERC20 {
    address public admin;
    string public clubName;

    event Airdropped(address[] recipients, uint256 amount);

    constructor(
        string memory _clubName,
        string memory _tokenName,
        string memory _symbol,
        uint256 _supply
    ) ERC20(_tokenName, _symbol) {
        admin = msg.sender;
        clubName = _clubName;
        _mint(msg.sender, _supply * 10 ** decimals());
    }

    function airdrop(address[] calldata recipients, uint256 amount) external {
        require(msg.sender == admin, "Not admin");
        for (uint i = 0; i < recipients.length; i++) {
            _transfer(admin, recipients[i], amount);
        }
        emit Airdropped(recipients, amount);
    }

    function getAdmin() external view returns (address) {
        return admin;
    }
}