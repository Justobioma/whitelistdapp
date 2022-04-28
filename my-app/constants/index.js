export const abi = [{
  "_format": "hh-sol-artifact-1",
  "contractName": "Whitelist",
  "sourceName": "contracts/Whitelist.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "uint8",
          "name": "_maxWhitelistedAddresses",
          "type": "uint8"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "addAddressToWhitelist",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "maxWhitelistedAddresses",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "numAddressesWhitelisted",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "whitelistedAddresses",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b5060405161061438038061061483398181016040528101906100329190610067565b806000806101000a81548160ff021916908360ff160217905550506100b4565b6000815190506100618161009d565b92915050565b60006020828403121561007957600080fd5b600061008784828501610052565b91505092915050565b600060ff82169050919050565b6100a681610090565b81146100b157600080fd5b50565b610551806100c36000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806306c933d81461005157806331a72188146100815780634011d7cd1461009f5780638e7314d9146100bd575b600080fd5b61006b600480360381019061006691906102a1565b6100c7565b604051610078919061032e565b60405180910390f35b6100896100e7565b6040516100969190610389565b60405180910390f35b6100a76100f8565b6040516100b49190610389565b60405180910390f35b6100c561010b565b005b60016020528060005260406000206000915054906101000a900460ff1681565b60008054906101000a900460ff1681565b600260009054906101000a900460ff1681565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615610198576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161018f90610369565b60405180910390fd5b60008054906101000a900460ff1660ff16600260009054906101000a900460ff1660ff16106101fc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101f390610349565b60405180910390fd5b60018060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506001600260008282829054906101000a900460ff1661027291906103b5565b92506101000a81548160ff021916908360ff160217905550565b60008135905061029b81610504565b92915050565b6000602082840312156102b357600080fd5b60006102c18482850161028c565b91505092915050565b6102d3816103fe565b82525050565b60006102e6602d836103a4565b91506102f182610466565b604082019050919050565b60006103096023836103a4565b9150610314826104b5565b604082019050919050565b6103288161042a565b82525050565b600060208201905061034360008301846102ca565b92915050565b60006020820190508181036000830152610362816102d9565b9050919050565b60006020820190508181036000830152610382816102fc565b9050919050565b600060208201905061039e600083018461031f565b92915050565b600082825260208201905092915050565b60006103c08261042a565b91506103cb8361042a565b92508260ff038211156103e1576103e0610437565b5b828201905092915050565b60006103f78261040a565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600060ff82169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4d6f7265206164647265737365732063616e6e6f742062652061646465642c2060008201527f6c696d6974207265616368656400000000000000000000000000000000000000602082015250565b7f53656e6465722068617320616c7265616479206265656e2077686974656c697360008201527f7465640000000000000000000000000000000000000000000000000000000000602082015250565b61050d816103ec565b811461051857600080fd5b5056fea264697066735822122023085dbfb907a4c894d652bac58adfe34fdcc65dfbb3e8a4a6ee0f2d01e45dd564736f6c63430008040033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b506004361061004c5760003560e01c806306c933d81461005157806331a72188146100815780634011d7cd1461009f5780638e7314d9146100bd575b600080fd5b61006b600480360381019061006691906102a1565b6100c7565b604051610078919061032e565b60405180910390f35b6100896100e7565b6040516100969190610389565b60405180910390f35b6100a76100f8565b6040516100b49190610389565b60405180910390f35b6100c561010b565b005b60016020528060005260406000206000915054906101000a900460ff1681565b60008054906101000a900460ff1681565b600260009054906101000a900460ff1681565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615610198576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161018f90610369565b60405180910390fd5b60008054906101000a900460ff1660ff16600260009054906101000a900460ff1660ff16106101fc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101f390610349565b60405180910390fd5b60018060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506001600260008282829054906101000a900460ff1661027291906103b5565b92506101000a81548160ff021916908360ff160217905550565b60008135905061029b81610504565b92915050565b6000602082840312156102b357600080fd5b60006102c18482850161028c565b91505092915050565b6102d3816103fe565b82525050565b60006102e6602d836103a4565b91506102f182610466565b604082019050919050565b60006103096023836103a4565b9150610314826104b5565b604082019050919050565b6103288161042a565b82525050565b600060208201905061034360008301846102ca565b92915050565b60006020820190508181036000830152610362816102d9565b9050919050565b60006020820190508181036000830152610382816102fc565b9050919050565b600060208201905061039e600083018461031f565b92915050565b600082825260208201905092915050565b60006103c08261042a565b91506103cb8361042a565b92508260ff038211156103e1576103e0610437565b5b828201905092915050565b60006103f78261040a565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600060ff82169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4d6f7265206164647265737365732063616e6e6f742062652061646465642c2060008201527f6c696d6974207265616368656400000000000000000000000000000000000000602082015250565b7f53656e6465722068617320616c7265616479206265656e2077686974656c697360008201527f7465640000000000000000000000000000000000000000000000000000000000602082015250565b61050d816103ec565b811461051857600080fd5b5056fea264697066735822122023085dbfb907a4c894d652bac58adfe34fdcc65dfbb3e8a4a6ee0f2d01e45dd564736f6c63430008040033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}];
export const WHITELIST_CONTRACT_ADDRESS = ' hy';
