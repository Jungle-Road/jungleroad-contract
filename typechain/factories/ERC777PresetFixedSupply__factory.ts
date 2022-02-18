/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  Overrides,
  BigNumberish,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC777PresetFixedSupply,
  ERC777PresetFixedSupplyInterface,
} from "../ERC777PresetFixedSupply";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "address[]",
        name: "defaultOperators",
        type: "address[]",
      },
      {
        internalType: "uint256",
        name: "initialSupply",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "tokenHolder",
        type: "address",
      },
    ],
    name: "AuthorizedOperator",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "operatorData",
        type: "bytes",
      },
    ],
    name: "Burned",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "operatorData",
        type: "bytes",
      },
    ],
    name: "Minted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "tokenHolder",
        type: "address",
      },
    ],
    name: "RevokedOperator",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "operatorData",
        type: "bytes",
      },
    ],
    name: "Sent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "holder",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "authorizeOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenHolder",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "defaultOperators",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "granularity",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenHolder",
        type: "address",
      },
    ],
    name: "isOperatorFor",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "operatorData",
        type: "bytes",
      },
    ],
    name: "operatorBurn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "operatorData",
        type: "bytes",
      },
    ],
    name: "operatorSend",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "revokeOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "send",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "holder",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200225b3803806200225b83398101604081905262000034916200076d565b84848482600290805190602001906200004f929190620005b9565b50815162000065906003906020850190620005b9565b5080516200007b90600490602084019062000648565b5060005b8151811015620000eb57600160056000848481518110620000a457620000a462000a4a565b6020908102919091018101516001600160a01b03168252810191909152604001600020805460ff191691151591909117905580620000e28162000a16565b9150506200007f565b506040516329965a1d60e01b815230600482018190527fac7fbab5f54a3ca8194167523c6753bfeb96a445279294b6125b68cce217705460248301526044820152731820a4b7618bde71dce8cdc73aab6c95905fad24906329965a1d90606401600060405180830381600087803b1580156200016657600080fd5b505af11580156200017b573d6000803e3d6000fd5b50506040516329965a1d60e01b815230600482018190527faea199e31a596269b42cdafd93407f14436db6e4cad65417994c2eb37381e05a60248301526044820152731820a4b7618bde71dce8cdc73aab6c95905fad2492506329965a1d9150606401600060405180830381600087803b158015620001f957600080fd5b505af11580156200020e573d6000803e3d6000fd5b5050505050505062000247818360405180602001604052806000815250604051806020016040528060008152506200025260201b60201c565b505050505062000a76565b6200026284848484600162000268565b50505050565b6001600160a01b038516620002c45760405162461bcd60e51b815260206004820181905260248201527f4552433737373a206d696e7420746f20746865207a65726f206164647265737360448201526064015b60405180910390fd5b60003390508460016000828254620002dd91906200098f565b90915550506001600160a01b038616600090815260208190526040812080548792906200030c9084906200098f565b909155506200032490508160008888888888620003be565b856001600160a01b0316816001600160a01b03167f2fe5be0146f74c5bce36c0b80911af6c7d86ff27e89d5cfa61fc681327954e5d8787876040516200036d9392919062000923565b60405180910390a36040518581526001600160a01b038716906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050505050565b60405163555ddc6560e11b81526001600160a01b03861660048201527fb281fc8c12954d22544db45de3159a39272895b169a852b314f9cc762e44c53b6024820152600090731820a4b7618bde71dce8cdc73aab6c95905fad249063aabbb8ca9060440160206040518083038186803b1580156200043b57600080fd5b505afa15801562000450573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000476919062000748565b90506001600160a01b03811615620004f8576040516223de2960e01b81526001600160a01b038216906223de2990620004be908b908b908b908b908b908b90600401620008c5565b600060405180830381600087803b158015620004d957600080fd5b505af1158015620004ee573d6000803e3d6000fd5b50505050620005a9565b8115620005a9576200051e866001600160a01b0316620005b360201b620009d01760201c565b15620005a95760405162461bcd60e51b815260206004820152604d60248201527f4552433737373a20746f6b656e20726563697069656e7420636f6e747261637460448201527f20686173206e6f20696d706c656d656e74657220666f7220455243373737546f60648201526c1ad95b9cd49958da5c1a595b9d609a1b608482015260a401620002bb565b5050505050505050565b3b151590565b828054620005c790620009d9565b90600052602060002090601f016020900481019282620005eb576000855562000636565b82601f106200060657805160ff191683800117855562000636565b8280016001018555821562000636579182015b828111156200063657825182559160200191906001019062000619565b5062000644929150620006a0565b5090565b82805482825590600052602060002090810192821562000636579160200282015b828111156200063657825182546001600160a01b0319166001600160a01b0390911617825560209092019160019091019062000669565b5b80821115620006445760008155600101620006a1565b80516001600160a01b0381168114620006cf57600080fd5b919050565b600082601f830112620006e657600080fd5b81516001600160401b0381111562000702576200070262000a60565b62000717601f8201601f19166020016200095c565b8181528460208386010111156200072d57600080fd5b62000740826020830160208701620009aa565b949350505050565b6000602082840312156200075b57600080fd5b6200076682620006b7565b9392505050565b600080600080600060a086880312156200078657600080fd5b85516001600160401b03808211156200079e57600080fd5b620007ac89838a01620006d4565b9650602091508188015181811115620007c457600080fd5b620007d28a828b01620006d4565b965050604088015181811115620007e857600080fd5b8801601f81018a13620007fa57600080fd5b8051828111156200080f576200080f62000a60565b8060051b9250620008228484016200095c565b8181528481019083860185850187018e10156200083e57600080fd5b600095505b838610156200086c576200085781620006b7565b83526001959095019491860191860162000843565b50809850505050505050606086015191506200088b60808701620006b7565b90509295509295909350565b60008151808452620008b1816020860160208601620009aa565b601f01601f19169290920160200192915050565b6001600160a01b0387811682528681166020830152851660408201526060810184905260c060808201819052600090620009029083018562000897565b82810360a084015262000916818562000897565b9998505050505050505050565b8381526060602082015260006200093e606083018562000897565b828103604084015262000952818562000897565b9695505050505050565b604051601f8201601f191681016001600160401b038111828210171562000987576200098762000a60565b604052919050565b60008219821115620009a557620009a562000a34565b500190565b60005b83811015620009c7578181015183820152602001620009ad565b83811115620002625750506000910152565b600181811c90821680620009ee57607f821691505b6020821081141562000a1057634e487b7160e01b600052602260045260246000fd5b50919050565b600060001982141562000a2d5762000a2d62000a34565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6117d58062000a866000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c8063959b8c3f116100a2578063d95b637111610071578063d95b63711461022b578063dd62ed3e1461023e578063fad8b32a14610277578063fc673c4f1461028a578063fe9d93031461029d57600080fd5b8063959b8c3f146101ea57806395d89b41146101fd5780639bd9bbc614610205578063a9059cbb1461021857600080fd5b806323b872dd116100e957806323b872dd14610183578063313ce56714610196578063556f0dc7146101a557806362ad1b83146101ac57806370a08231146101c157600080fd5b806306e485381461011b57806306fdde0314610139578063095ea7b31461014e57806318160ddd14610171575b600080fd5b6101236102b0565b60405161013091906115cc565b60405180910390f35b610141610312565b6040516101309190611619565b61016161015c3660046113d9565b61039b565b6040519015158152602001610130565b6001545b604051908152602001610130565b610161610191366004611305565b6103b3565b60405160128152602001610130565b6001610175565b6101bf6101ba366004611346565b61057c565b005b6101756101cf366004611292565b6001600160a01b031660009081526020819052604090205490565b6101bf6101f8366004611292565b6105b8565b6101416106d6565b6101bf610213366004611405565b6106e5565b6101616102263660046113d9565b610708565b6101616102393660046112cc565b6107bb565b61017561024c3660046112cc565b6001600160a01b03918216600090815260086020908152604080832093909416825291909152205490565b6101bf610285366004611292565b61085d565b6101bf61029836600461145e565b610979565b6101bf6102ab3660046114de565b6109b1565b6060600480548060200260200160405190810160405280929190818152602001828054801561030857602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116102ea575b5050505050905090565b60606002805461032190611720565b80601f016020809104026020016040519081016040528092919081815260200182805461034d90611720565b80156103085780601f1061036f57610100808354040283529160200191610308565b820191906000526020600020905b81548152906001019060200180831161037d57509395945050505050565b6000336103a98185856109d6565b5060019392505050565b60006001600160a01b0383166103e45760405162461bcd60e51b81526004016103db9061162c565b60405180910390fd5b6001600160a01b0384166104495760405162461bcd60e51b815260206004820152602660248201527f4552433737373a207472616e736665722066726f6d20746865207a65726f206160448201526564647265737360d01b60648201526084016103db565b600033905061047a818686866040518060200160405280600081525060405180602001604052806000815250610afd565b6104a6818686866040518060200160405280600081525060405180602001604052806000815250610c34565b6001600160a01b038086166000908152600860209081526040808320938516835292905220548381101561052e5760405162461bcd60e51b815260206004820152602960248201527f4552433737373a207472616e7366657220616d6f756e74206578636565647320604482015268616c6c6f77616e636560b81b60648201526084016103db565b610542868361053d8785611709565b6109d6565b6105708287878760405180602001604052806000815250604051806020016040528060008152506000610d9a565b50600195945050505050565b61058633866107bb565b6105a25760405162461bcd60e51b81526004016103db90611670565b6105b185858585856001610f6e565b5050505050565b336001600160a01b038216141561061d5760405162461bcd60e51b8152602060048201526024808201527f4552433737373a20617574686f72697a696e672073656c66206173206f70657260448201526330ba37b960e11b60648201526084016103db565b6001600160a01b03811660009081526005602052604090205460ff161561066e573360009081526007602090815260408083206001600160a01b03851684529091529020805460ff1916905561069d565b3360009081526006602090815260408083206001600160a01b03851684529091529020805460ff191660011790555b60405133906001600160a01b038316907ff4caeb2d6ca8932a215a353d0703c326ec2d81fc68170f320eb2ab49e9df61f990600090a350565b60606003805461032190611720565b61070333848484604051806020016040528060008152506001610f6e565b505050565b60006001600160a01b0383166107305760405162461bcd60e51b81526004016103db9061162c565b6000339050610761818286866040518060200160405280600081525060405180602001604052806000815250610afd565b61078d818286866040518060200160405280600081525060405180602001604052806000815250610c34565b6103a98182868660405180602001604052806000815250604051806020016040528060008152506000610d9a565b6000816001600160a01b0316836001600160a01b0316148061082657506001600160a01b03831660009081526005602052604090205460ff16801561082657506001600160a01b0380831660009081526007602090815260408083209387168352929052205460ff16155b8061085657506001600160a01b0380831660009081526006602090815260408083209387168352929052205460ff165b9392505050565b6001600160a01b0381163314156108c05760405162461bcd60e51b815260206004820152602160248201527f4552433737373a207265766f6b696e672073656c66206173206f70657261746f6044820152603960f91b60648201526084016103db565b6001600160a01b03811660009081526005602052604090205460ff1615610914573360009081526007602090815260408083206001600160a01b03851684529091529020805460ff19166001179055610940565b3360009081526006602090815260408083206001600160a01b03851684529091529020805460ff191690555b60405133906001600160a01b038316907f50546e66e5f44d728365dc3908c63bc5cfeeab470722c1677e3073a6ac294aa190600090a350565b61098333856107bb565b61099f5760405162461bcd60e51b81526004016103db90611670565b6109ab84848484611051565b50505050565b6109cc33838360405180602001604052806000815250611051565b5050565b3b151590565b6001600160a01b038316610a3a5760405162461bcd60e51b815260206004820152602560248201527f4552433737373a20617070726f76652066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016103db565b6001600160a01b038216610a9c5760405162461bcd60e51b815260206004820152602360248201527f4552433737373a20617070726f766520746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103db565b6001600160a01b0383811660008181526008602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b60405163555ddc6560e11b81526001600160a01b03861660048201527f29ddb589b1fb5fc7cf394961c1adf5f8c6454761adf795e67fe149f658abe8956024820152600090731820a4b7618bde71dce8cdc73aab6c95905fad249063aabbb8ca9060440160206040518083038186803b158015610b7957600080fd5b505afa158015610b8d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bb191906112af565b90506001600160a01b03811615610c2b57604051633ad5cbc160e11b81526001600160a01b038216906375ab978290610bf8908a908a908a908a908a908a90600401611572565b600060405180830381600087803b158015610c1257600080fd5b505af1158015610c26573d6000803e3d6000fd5b505050505b50505050505050565b6001600160a01b03851660009081526020819052604090205483811015610cad5760405162461bcd60e51b815260206004820152602760248201527f4552433737373a207472616e7366657220616d6f756e7420657863656564732060448201526662616c616e636560c81b60648201526084016103db565b6001600160a01b03808716600090815260208190526040808220878503905591871681529081208054869290610ce49084906116f1565b92505081905550846001600160a01b0316866001600160a01b0316886001600160a01b03167f06b541ddaa720db2b10a4d0cdac39b8d360425fc073085fac19bc82614677987878787604051610d3c939291906116bc565b60405180910390a4846001600160a01b0316866001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef86604051610d8991815260200190565b60405180910390a350505050505050565b60405163555ddc6560e11b81526001600160a01b03861660048201527fb281fc8c12954d22544db45de3159a39272895b169a852b314f9cc762e44c53b6024820152600090731820a4b7618bde71dce8cdc73aab6c95905fad249063aabbb8ca9060440160206040518083038186803b158015610e1657600080fd5b505afa158015610e2a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e4e91906112af565b90506001600160a01b03811615610eca576040516223de2960e01b81526001600160a01b038216906223de2990610e93908b908b908b908b908b908b90600401611572565b600060405180830381600087803b158015610ead57600080fd5b505af1158015610ec1573d6000803e3d6000fd5b50505050610f64565b8115610f64576001600160a01b0386163b15610f645760405162461bcd60e51b815260206004820152604d60248201527f4552433737373a20746f6b656e20726563697069656e7420636f6e747261637460448201527f20686173206e6f20696d706c656d656e74657220666f7220455243373737546f60648201526c1ad95b9cd49958da5c1a595b9d609a1b608482015260a4016103db565b5050505050505050565b6001600160a01b038616610fcf5760405162461bcd60e51b815260206004820152602260248201527f4552433737373a2073656e642066726f6d20746865207a65726f206164647265604482015261737360f01b60648201526084016103db565b6001600160a01b0385166110255760405162461bcd60e51b815260206004820181905260248201527f4552433737373a2073656e6420746f20746865207a65726f206164647265737360448201526064016103db565b33611034818888888888610afd565b611042818888888888610c34565b610c2b81888888888888610d9a565b6001600160a01b0384166110b25760405162461bcd60e51b815260206004820152602260248201527f4552433737373a206275726e2066726f6d20746865207a65726f206164647265604482015261737360f01b60648201526084016103db565b336110c281866000878787610afd565b6001600160a01b038516600090815260208190526040902054848110156111375760405162461bcd60e51b815260206004820152602360248201527f4552433737373a206275726e20616d6f756e7420657863656564732062616c616044820152626e636560e81b60648201526084016103db565b6001600160a01b0386166000908152602081905260408120868303905560018054879290611166908490611709565b92505081905550856001600160a01b0316826001600160a01b03167fa78a9be3a7b862d26933ad85fb11d80ef66b8f972d7cbba06621d583943a40988787876040516111b4939291906116bc565b60405180910390a36040518581526000906001600160a01b038816907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050505050565b600082601f83011261121657600080fd5b813567ffffffffffffffff8082111561123157611231611771565b604051601f8301601f19908116603f0116810190828211818310171561125957611259611771565b8160405283815286602085880101111561127257600080fd5b836020870160208301376000602085830101528094505050505092915050565b6000602082840312156112a457600080fd5b813561085681611787565b6000602082840312156112c157600080fd5b815161085681611787565b600080604083850312156112df57600080fd5b82356112ea81611787565b915060208301356112fa81611787565b809150509250929050565b60008060006060848603121561131a57600080fd5b833561132581611787565b9250602084013561133581611787565b929592945050506040919091013590565b600080600080600060a0868803121561135e57600080fd5b853561136981611787565b9450602086013561137981611787565b935060408601359250606086013567ffffffffffffffff8082111561139d57600080fd5b6113a989838a01611205565b935060808801359150808211156113bf57600080fd5b506113cc88828901611205565b9150509295509295909350565b600080604083850312156113ec57600080fd5b82356113f781611787565b946020939093013593505050565b60008060006060848603121561141a57600080fd5b833561142581611787565b925060208401359150604084013567ffffffffffffffff81111561144857600080fd5b61145486828701611205565b9150509250925092565b6000806000806080858703121561147457600080fd5b843561147f81611787565b935060208501359250604085013567ffffffffffffffff808211156114a357600080fd5b6114af88838901611205565b935060608701359150808211156114c557600080fd5b506114d287828801611205565b91505092959194509250565b600080604083850312156114f157600080fd5b82359150602083013567ffffffffffffffff81111561150f57600080fd5b61151b85828601611205565b9150509250929050565b6000815180845260005b8181101561154b5760208185018101518683018201520161152f565b8181111561155d576000602083870101525b50601f01601f19169290920160200192915050565b6001600160a01b0387811682528681166020830152851660408201526060810184905260c0608082018190526000906115ad90830185611525565b82810360a08401526115bf8185611525565b9998505050505050505050565b6020808252825182820181905260009190848201906040850190845b8181101561160d5783516001600160a01b0316835292840192918401916001016115e8565b50909695505050505050565b6020815260006108566020830184611525565b60208082526024908201527f4552433737373a207472616e7366657220746f20746865207a65726f206164646040820152637265737360e01b606082015260800190565b6020808252602c908201527f4552433737373a2063616c6c6572206973206e6f7420616e206f70657261746f60408201526b39103337b9103437b63232b960a11b606082015260800190565b8381526060602082015260006116d56060830185611525565b82810360408401526116e78185611525565b9695505050505050565b600082198211156117045761170461175b565b500190565b60008282101561171b5761171b61175b565b500390565b600181811c9082168061173457607f821691505b6020821081141561175557634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461179c57600080fd5b5056fea2646970667358221220be368097f6aea0b90de450167640efb8382043b9460db4de9dde0bd59cdcba6164736f6c63430008070033";

type ERC777PresetFixedSupplyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC777PresetFixedSupplyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC777PresetFixedSupply__factory extends ContractFactory {
  constructor(...args: ERC777PresetFixedSupplyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    name: string,
    symbol: string,
    defaultOperators: string[],
    initialSupply: BigNumberish,
    owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC777PresetFixedSupply> {
    return super.deploy(
      name,
      symbol,
      defaultOperators,
      initialSupply,
      owner,
      overrides || {}
    ) as Promise<ERC777PresetFixedSupply>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    defaultOperators: string[],
    initialSupply: BigNumberish,
    owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      name,
      symbol,
      defaultOperators,
      initialSupply,
      owner,
      overrides || {}
    );
  }
  attach(address: string): ERC777PresetFixedSupply {
    return super.attach(address) as ERC777PresetFixedSupply;
  }
  connect(signer: Signer): ERC777PresetFixedSupply__factory {
    return super.connect(signer) as ERC777PresetFixedSupply__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC777PresetFixedSupplyInterface {
    return new utils.Interface(_abi) as ERC777PresetFixedSupplyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC777PresetFixedSupply {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ERC777PresetFixedSupply;
  }
}
