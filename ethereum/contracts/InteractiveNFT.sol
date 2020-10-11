// SPDX-License-Identifier: MIT

pragma solidity ^0.7.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract InteractiveNFT is Ownable, ERC721 {
    constructor() public ERC721("InteractiveNFT", "INFT") {}

    function mint(address _to, string calldata _tokenURI) external {
        uint256 nextId = totalSupply();
        _safeMint(_to, nextId);
        _setTokenURI(nextId, _tokenURI);
    }

    function mint(string calldata _tokenURI) external {
        uint256 nextId = totalSupply();
        _safeMint(_msgSender(), nextId);
        _setTokenURI(nextId, _tokenURI);
    }
}