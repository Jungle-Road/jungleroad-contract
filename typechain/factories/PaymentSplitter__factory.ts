/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
  BigNumberish,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  PaymentSplitter,
  PaymentSplitterInterface,
} from "../PaymentSplitter";

const _abi = [
  {
    inputs: [
      {
        internalType: "address[]",
        name: "payees",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "shares_",
        type: "uint256[]",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
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
    ],
    name: "ERC20PaymentReleased",
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
      {
        indexed: false,
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
    ],
    name: "PayeeAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
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
    ],
    name: "PaymentReceived",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
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
    ],
    name: "PaymentReleased",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "payee",
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
    inputs: [
      {
        internalType: "address payable",
        name: "account",
        type: "address",
      },
    ],
    name: "release",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "release",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "released",
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
        name: "account",
        type: "address",
      },
    ],
    name: "released",
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
        name: "account",
        type: "address",
      },
    ],
    name: "shares",
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
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
    ],
    name: "totalReleased",
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
    name: "totalReleased",
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
    name: "totalShares",
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
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60806040526040516200116f3803806200116f8339810160408190526200002691620003c6565b8051825114620000985760405162461bcd60e51b815260206004820152603260248201527f5061796d656e7453706c69747465723a2070617965657320616e6420736861726044820152710cae640d8cadccee8d040dad2e6dac2e8c6d60731b60648201526084015b60405180910390fd5b6000825111620000eb5760405162461bcd60e51b815260206004820152601a60248201527f5061796d656e7453706c69747465723a206e6f2070617965657300000000000060448201526064016200008f565b60005b825181101562000157576200014283828151811062000111576200011162000552565b60200260200101518383815181106200012e576200012e62000552565b60200260200101516200016060201b60201c565b806200014e816200051e565b915050620000ee565b5050506200057e565b6001600160a01b038216620001cd5760405162461bcd60e51b815260206004820152602c60248201527f5061796d656e7453706c69747465723a206163636f756e74206973207468652060448201526b7a65726f206164647265737360a01b60648201526084016200008f565b600081116200021f5760405162461bcd60e51b815260206004820152601d60248201527f5061796d656e7453706c69747465723a2073686172657320617265203000000060448201526064016200008f565b6001600160a01b038216600090815260026020526040902054156200029b5760405162461bcd60e51b815260206004820152602b60248201527f5061796d656e7453706c69747465723a206163636f756e7420616c726561647960448201526a206861732073686172657360a81b60648201526084016200008f565b60048054600181019091557f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b0180546001600160a01b0319166001600160a01b0384169081179091556000908152600260205260408120829055546200030390829062000503565b600055604080516001600160a01b0384168152602081018390527f40c340f65e17194d14ddddb073d3c9f888e3cb52b5aae0c6c7706b4fbc905fac910160405180910390a15050565b600082601f8301126200035e57600080fd5b81516020620003776200037183620004dd565b620004aa565b80838252828201915082860187848660051b89010111156200039857600080fd5b60005b85811015620003b9578151845292840192908401906001016200039b565b5090979650505050505050565b60008060408385031215620003da57600080fd5b82516001600160401b0380821115620003f257600080fd5b818501915085601f8301126200040757600080fd5b815160206200041a6200037183620004dd565b8083825282820191508286018a848660051b89010111156200043b57600080fd5b600096505b84871015620004765780516001600160a01b03811681146200046157600080fd5b83526001969096019591830191830162000440565b50918801519196509093505050808211156200049157600080fd5b50620004a0858286016200034c565b9150509250929050565b604051601f8201601f191681016001600160401b0381118282101715620004d557620004d562000568565b604052919050565b60006001600160401b03821115620004f957620004f962000568565b5060051b60200190565b600082198211156200051957620005196200053c565b500190565b60006000198214156200053557620005356200053c565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b610be1806200058e6000396000f3fe60806040526004361061008a5760003560e01c80638b83209b116100595780638b83209b146101845780639852595c146101bc578063ce7c2ac2146101f2578063d79779b214610228578063e33b7de31461025e57600080fd5b806319165587146100d85780633a98ef39146100fa578063406072a91461011e57806348b750441461016457600080fd5b366100d3577f6ef95f06320e7a25a04a175ca677b7052bdd97131872c2192525a629f51be77033604080516001600160a01b0390921682523460208301520160405180910390a1005b600080fd5b3480156100e457600080fd5b506100f86100f336600461093d565b610273565b005b34801561010657600080fd5b506000545b6040519081526020015b60405180910390f35b34801561012a57600080fd5b5061010b61013936600461097c565b6001600160a01b03918216600090815260066020908152604080832093909416825291909152205490565b34801561017057600080fd5b506100f861017f36600461097c565b6103aa565b34801561019057600080fd5b506101a461019f3660046109b5565b610592565b6040516001600160a01b039091168152602001610115565b3480156101c857600080fd5b5061010b6101d736600461093d565b6001600160a01b031660009081526003602052604090205490565b3480156101fe57600080fd5b5061010b61020d36600461093d565b6001600160a01b031660009081526002602052604090205490565b34801561023457600080fd5b5061010b61024336600461093d565b6001600160a01b031660009081526005602052604090205490565b34801561026a57600080fd5b5060015461010b565b6001600160a01b0381166000908152600260205260409020546102b15760405162461bcd60e51b81526004016102a890610a36565b60405180910390fd5b60006102bc60015490565b6102c69047610ac7565b905060006102f383836102ee866001600160a01b031660009081526003602052604090205490565b6105c2565b9050806103125760405162461bcd60e51b81526004016102a890610a7c565b6001600160a01b0383166000908152600360205260408120805483929061033a908490610ac7565b9250508190555080600160008282546103539190610ac7565b9091555061036390508382610607565b604080516001600160a01b0385168152602081018390527fdf20fd1e76bc69d672e4814fafb2c449bba3a5369d8359adf9e05e6fde87b056910160405180910390a1505050565b6001600160a01b0381166000908152600260205260409020546103df5760405162461bcd60e51b81526004016102a890610a36565b6001600160a01b0382166000908152600560205260408120546040516370a0823160e01b81523060048201526001600160a01b038516906370a082319060240160206040518083038186803b15801561043757600080fd5b505afa15801561044b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061046f91906109ce565b6104799190610ac7565b905060006104b283836102ee87876001600160a01b03918216600090815260066020908152604080832093909416825291909152205490565b9050806104d15760405162461bcd60e51b81526004016102a890610a7c565b6001600160a01b03808516600090815260066020908152604080832093871683529290529081208054839290610508908490610ac7565b90915550506001600160a01b03841660009081526005602052604081208054839290610535908490610ac7565b909155506105469050848483610725565b604080516001600160a01b038581168252602082018490528616917f3be5b7a71e84ed12875d241991c70855ac5817d847039e17a9d895c1ceb0f18a910160405180910390a250505050565b6000600482815481106105a7576105a7610b7d565b6000918252602090912001546001600160a01b031692915050565b600080546001600160a01b0385168252600260205260408220548391906105e99086610b01565b6105f39190610adf565b6105fd9190610b20565b90505b9392505050565b804710156106575760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a20696e73756666696369656e742062616c616e636500000060448201526064016102a8565b6000826001600160a01b03168260405160006040518083038185875af1925050503d80600081146106a4576040519150601f19603f3d011682016040523d82523d6000602084013e6106a9565b606091505b50509050806107205760405162461bcd60e51b815260206004820152603a60248201527f416464726573733a20756e61626c6520746f2073656e642076616c75652c207260448201527f6563697069656e74206d6179206861766520726576657274656400000000000060648201526084016102a8565b505050565b604080516001600160a01b03848116602483015260448083018590528351808403909101815260649092018352602080830180516001600160e01b031663a9059cbb60e01b17905283518085019094528084527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656490840152610720928692916000916107b5918516908490610832565b80519091501561072057808060200190518101906107d3919061095a565b6107205760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016102a8565b60606105fd848460008585843b61088b5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016102a8565b600080866001600160a01b031685876040516108a791906109e7565b60006040518083038185875af1925050503d80600081146108e4576040519150601f19603f3d011682016040523d82523d6000602084013e6108e9565b606091505b50915091506108f9828286610904565b979650505050505050565b60608315610913575081610600565b8251156109235782518084602001fd5b8160405162461bcd60e51b81526004016102a89190610a03565b60006020828403121561094f57600080fd5b813561060081610b93565b60006020828403121561096c57600080fd5b8151801515811461060057600080fd5b6000806040838503121561098f57600080fd5b823561099a81610b93565b915060208301356109aa81610b93565b809150509250929050565b6000602082840312156109c757600080fd5b5035919050565b6000602082840312156109e057600080fd5b5051919050565b600082516109f9818460208701610b37565b9190910192915050565b6020815260008251806020840152610a22816040850160208701610b37565b601f01601f19169190910160400192915050565b60208082526026908201527f5061796d656e7453706c69747465723a206163636f756e7420686173206e6f2060408201526573686172657360d01b606082015260800190565b6020808252602b908201527f5061796d656e7453706c69747465723a206163636f756e74206973206e6f742060408201526a191d59481c185e5b595b9d60aa1b606082015260800190565b60008219821115610ada57610ada610b67565b500190565b600082610afc57634e487b7160e01b600052601260045260246000fd5b500490565b6000816000190483118215151615610b1b57610b1b610b67565b500290565b600082821015610b3257610b32610b67565b500390565b60005b83811015610b52578181015183820152602001610b3a565b83811115610b61576000848401525b50505050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b6001600160a01b0381168114610ba857600080fd5b5056fea26469706673582212202cbd632f8e1a2ee91716b7335f2b225c5c57ae4a33012ea25b29b2528e20739064736f6c63430008070033";

type PaymentSplitterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PaymentSplitterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PaymentSplitter__factory extends ContractFactory {
  constructor(...args: PaymentSplitterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    payees: string[],
    shares_: BigNumberish[],
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<PaymentSplitter> {
    return super.deploy(
      payees,
      shares_,
      overrides || {}
    ) as Promise<PaymentSplitter>;
  }
  getDeployTransaction(
    payees: string[],
    shares_: BigNumberish[],
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(payees, shares_, overrides || {});
  }
  attach(address: string): PaymentSplitter {
    return super.attach(address) as PaymentSplitter;
  }
  connect(signer: Signer): PaymentSplitter__factory {
    return super.connect(signer) as PaymentSplitter__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PaymentSplitterInterface {
    return new utils.Interface(_abi) as PaymentSplitterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PaymentSplitter {
    return new Contract(address, _abi, signerOrProvider) as PaymentSplitter;
  }
}
