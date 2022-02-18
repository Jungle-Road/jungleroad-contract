/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  JungleRoadToken,
  JungleRoadTokenInterface,
} from "../JungleRoadToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_multiSigWallet",
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
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
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
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
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
        name: "amount",
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
        name: "account",
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
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
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
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
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
    inputs: [],
    name: "multiSigWallet",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
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
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
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
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620010e7380380620010e7833981810160405260208110156200003757600080fd5b50516040805180820182526011815270253ab733b632902937b0b2102a37b5b2b760791b6020828101918252835180850190945260048452631291d49160e21b9084015281519192916200008e916003916200032f565b508051620000a49060049060208401906200032f565b50506005805461ff001960ff19909116601217169055506001600160a01b038116620001025760405162461bcd60e51b8152600401808060200182810382526029815260200180620010be6029913960400191505060405180910390fd5b6005805462010000600160b01b031916620100006001600160a01b038416021790556200013c816b033b2e3c9fd0803ce800000062000143565b50620003cb565b6001600160a01b0382166200019f576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b620001ad6000838362000252565b620001c981600254620002bf60201b620006e61790919060201c565b6002556001600160a01b03821660009081526020818152604090912054620001fc918390620006e6620002bf821b17901c565b6001600160a01b0383166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b6200025c62000321565b15620002a2576040805162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b604482015290519081900360640190fd5b620002ba838383620002ba60201b620007471760201c565b505050565b6000828201838110156200031a576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b600554610100900460ff1690565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200037257805160ff1916838001178555620003a2565b82800160010185558215620003a2579182015b82811115620003a257825182559160200191906001019062000385565b50620003b0929150620003b4565b5090565b5b80821115620003b05760008155600101620003b5565b610ce380620003db6000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c80634b8feb4f1161009757806395d89b411161006657806395d89b41146102b5578063a457c2d7146102bd578063a9059cbb146102e9578063dd62ed3e14610315576100f5565b80634b8feb4f1461025b5780635c975abb1461027f57806370a08231146102875780638456cb59146102ad576100f5565b806323b872dd116100d357806323b872dd146101d1578063313ce5671461020757806339509351146102255780633f4ba83a14610251576100f5565b806306fdde03146100fa578063095ea7b31461017757806318160ddd146101b7575b600080fd5b610102610343565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561013c578181015183820152602001610124565b50505050905090810190601f1680156101695780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101a36004803603604081101561018d57600080fd5b506001600160a01b0381351690602001356103d9565b604080519115158252519081900360200190f35b6101bf6103f6565b60408051918252519081900360200190f35b6101a3600480360360608110156101e757600080fd5b506001600160a01b038135811691602081013590911690604001356103fc565b61020f610483565b6040805160ff9092168252519081900360200190f35b6101a36004803603604081101561023b57600080fd5b506001600160a01b03813516906020013561048c565b6102596104da565b005b61026361053e565b604080516001600160a01b039092168252519081900360200190f35b6101a3610553565b6101bf6004803603602081101561029d57600080fd5b50356001600160a01b0316610561565b61025961057c565b6101026105de565b6101a3600480360360408110156102d357600080fd5b506001600160a01b03813516906020013561063f565b6101a3600480360360408110156102ff57600080fd5b506001600160a01b0381351690602001356106a7565b6101bf6004803603604081101561032b57600080fd5b506001600160a01b03813581169160200135166106bb565b60038054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156103cf5780601f106103a4576101008083540402835291602001916103cf565b820191906000526020600020905b8154815290600101906020018083116103b257829003601f168201915b5050505050905090565b60006103ed6103e661074c565b8484610750565b50600192915050565b60025490565b600061040984848461083c565b6104798461041561074c565b61047485604051806060016040528060288152602001610c18602891396001600160a01b038a1660009081526001602052604081209061045361074c565b6001600160a01b031681526020810191909152604001600020549190610997565b610750565b5060019392505050565b60055460ff1690565b60006103ed61049961074c565b8461047485600160006104aa61074c565b6001600160a01b03908116825260208083019390935260409182016000908120918c1681529252902054906106e6565b6005546201000090046001600160a01b03163314610534576040805162461bcd60e51b815260206004820152601260248201527115da1e48191bc81e5bdd48191bc81d1a185d60721b604482015290519081900360640190fd5b61053c610a2e565b565b6005546201000090046001600160a01b031681565b600554610100900460ff1690565b6001600160a01b031660009081526020819052604090205490565b6005546201000090046001600160a01b031633146105d6576040805162461bcd60e51b815260206004820152601260248201527115da1e48191bc81e5bdd48191bc81d1a185d60721b604482015290519081900360640190fd5b61053c610acf565b60048054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156103cf5780601f106103a4576101008083540402835291602001916103cf565b60006103ed61064c61074c565b8461047485604051806060016040528060258152602001610c89602591396001600061067661074c565b6001600160a01b03908116825260208083019390935260409182016000908120918d16815292529020549190610997565b60006103ed6106b461074c565b848461083c565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b600082820183811015610740576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b505050565b3390565b6001600160a01b0383166107955760405162461bcd60e51b8152600401808060200182810382526024815260200180610c656024913960400191505060405180910390fd5b6001600160a01b0382166107da5760405162461bcd60e51b8152600401808060200182810382526022815260200180610bd06022913960400191505060405180910390fd5b6001600160a01b03808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b0383166108815760405162461bcd60e51b8152600401808060200182810382526025815260200180610c406025913960400191505060405180910390fd5b6001600160a01b0382166108c65760405162461bcd60e51b8152600401808060200182810382526023815260200180610bad6023913960400191505060405180910390fd5b6108d1838383610b54565b61090e81604051806060016040528060268152602001610bf2602691396001600160a01b0386166000908152602081905260409020549190610997565b6001600160a01b03808516600090815260208190526040808220939093559084168152205461093d90826106e6565b6001600160a01b038084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b60008184841115610a265760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156109eb5781810151838201526020016109d3565b50505050905090810190601f168015610a185780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b610a36610553565b610a7e576040805162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b604482015290519081900360640190fd5b6005805461ff00191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa610ab261074c565b604080516001600160a01b039092168252519081900360200190a1565b610ad7610553565b15610b1c576040805162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b604482015290519081900360640190fd5b6005805461ff0019166101001790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610ab261074c565b610b5c610553565b15610ba1576040805162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b604482015290519081900360640190fd5b61074783838361074756fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa2646970667358221220dfb2f0296d376f7dc5c46198620cc5ef524a4c357fca918c3f6b79d5d37c446464736f6c634300060c00336d756c746953696757616c6c65742063616e6e6f7420626520746865207a65726f2061646472657373";

type JungleRoadTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: JungleRoadTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class JungleRoadToken__factory extends ContractFactory {
  constructor(...args: JungleRoadTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    _multiSigWallet: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<JungleRoadToken> {
    return super.deploy(
      _multiSigWallet,
      overrides || {}
    ) as Promise<JungleRoadToken>;
  }
  getDeployTransaction(
    _multiSigWallet: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_multiSigWallet, overrides || {});
  }
  attach(address: string): JungleRoadToken {
    return super.attach(address) as JungleRoadToken;
  }
  connect(signer: Signer): JungleRoadToken__factory {
    return super.connect(signer) as JungleRoadToken__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): JungleRoadTokenInterface {
    return new utils.Interface(_abi) as JungleRoadTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): JungleRoadToken {
    return new Contract(address, _abi, signerOrProvider) as JungleRoadToken;
  }
}
