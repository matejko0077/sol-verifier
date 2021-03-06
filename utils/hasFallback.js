'use strict';

module.exports = (contract) => {
  for (const node of contract.subNodes) {
    if (node.type == 'FunctionDefinition' && node.name === '' && node.stateMutability === 'payable')
      return true;
  }
  return false;
};
