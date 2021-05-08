pragma solidity ^0.5.0;

import "./ERC721Full.sol";

contract MemoryToken is ERC721Full {
  constructor() ERC721Full("Memory Token", "MEMORY") public {
  }
}
