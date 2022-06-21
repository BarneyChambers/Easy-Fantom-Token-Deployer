pragma solidity ^0.8.12;

import "@openzeppelin/contracts/token/ERC20/presets/ERC20PresetFixedSupply.sol";

contract CoolFantomToken is ERC20PresetFixedSupply {

    uint256 public constant INITIAL_SUPPLY = 500000 * (10 ** uint256(18)); 
    constructor () ERC20PresetFixedSupply("CoolFantomToken", "CFT", INITIAL_SUPPLY, msg.sender) {
        
    }
}