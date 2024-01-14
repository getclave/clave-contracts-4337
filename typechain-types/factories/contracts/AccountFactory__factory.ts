/**
 * Copyright Clave - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */
/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { NonPayableOverrides } from "../../common";
import type {
  AccountFactory,
  AccountFactoryInterface,
} from "../../contracts/AccountFactory";
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "implementation",
        type: "address",
      },
      {
        internalType: "address",
        name: "registry",
        type: "address",
      },
      {
        internalType: "contract IEntryPoint",
        name: "entrypoint_",
        type: "address",
      },
      {
        internalType: "address",
        name: "deployer",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "DEPLOYMENT_FAILED",
    type: "error",
  },
  {
    inputs: [],
    name: "INITIALIZATION_FAILED",
    type: "error",
  },
  {
    inputs: [],
    name: "NOT_FROM_DEPLOYER",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "accountAddress",
        type: "address",
      },
    ],
    name: "NewClaveAccount",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "VERSION",
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
        internalType: "uint32",
        name: "unstakeDelaySec",
        type: "uint32",
      },
    ],
    name: "addStake",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newDeployer",
        type: "address",
      },
    ],
    name: "changeDeployer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "initializer",
        type: "bytes",
      },
    ],
    name: "deployAccount",
    outputs: [
      {
        internalType: "address",
        name: "accountAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "entrypoint",
    outputs: [
      {
        internalType: "contract IEntryPoint",
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
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "getAddressForSalt",
    outputs: [
      {
        internalType: "address",
        name: "accountAddress",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getImplementation",
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
    name: "owner",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unlockStake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "withdrawAddress",
        type: "address",
      },
    ],
    name: "withdrawStake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "withdrawAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60e03461012757601f610dd038819003918201601f19168301916001600160401b0383118484101761012c578084926080946040528339810103126101275761004781610142565b61005360208301610142565b604083015190926001600160a01b03919082821682036101275760606100799101610142565b906000549460018060a01b031994338688161760005560405196853391167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a360805260a05260c05216906001541617600155610c79908161015782396080518181816104210152818161051901526106d5015260a05181610729015260c05181818161028201528181610338015281816103be015281816104650152818161083a01526108d00152f35b600080fd5b634e487b7160e01b600052604160045260246000fd5b51906001600160a01b03821682036101275756fe6040608081526004908136101561001557600080fd5b6000803560e01c80630396cb6014610896578063205c287814610803578063574caef31461060d578063715018a6146105ae5780637603cc86146104bc5780638da5cb5b14610494578063a65d69d414610450578063aaf10f421461040c578063bb9fe6bf14610390578063c23a5cea14610300578063d0e30db014610271578063defdfae61461021d578063f2fde38b1461013e5763ffa1ad74146100ba57600080fd5b3461013b578060031936011261013b5750805181810181811067ffffffffffffffff82111761012657610118935082526005815260208101640312e302e360dc1b815282519384926020845251809281602086015285850190610995565b601f01601f19168101030190f35b604184634e487b7160e01b6000525260246000fd5b80fd5b50919034610219576020366003190112610219576001600160a01b03823581811693919290849003610215576101788386541633146109b8565b83156101c3575050600054826bffffffffffffffffffffffff60a01b821617600055167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a380f35b906020608492519162461bcd60e51b8352820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152fd5b8480fd5b8280fd5b50823461026d57602036600319011261026d57356001600160a01b0381811691829003610219576102529083541633146109b8565b6bffffffffffffffffffffffff60a01b600154161760015580f35b5080fd5b50918291826003193601126102fc577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031691823b156102f7578390602483518095819363b760faf960e01b8352309083015234905af19081156102ee57506102de5750f35b6102e790610949565b61013b5780f35b513d84823e3d90fd5b505050fd5b5050fd5b50918291346102fc5760203660031901126102fc5761031d61092e565b83546001600160a01b039061033590821633146109b8565b807f000000000000000000000000000000000000000000000000000000000000000016803b1561038c578592836024928651978895869463611d2e7560e11b865216908401525af19081156102ee57506102de5750f35b8580fd5b50918291346102fc57826003193601126102fc5782546001600160a01b03906103bc90821633146109b8565b7f00000000000000000000000000000000000000000000000000000000000000001691823b156102f757815163bb9fe6bf60e01b81529284918491829084905af19081156102ee57506102de5750f35b50903461026d578160031936011261026d57517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b50903461026d578160031936011261026d57517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b50903461026d578160031936011261026d57905490516001600160a01b039091168152602090f35b50919034610219576020928360031936011261013b57508051906101206104e585820184610973565b80835284830190610a04823981519261050686850192839251928391610995565b83019261054a838260018060a01b0396877f0000000000000000000000000000000000000000000000000000000000000000168a8201520388810184520182610973565b519020908051908582019260ff60f81b84523060601b602184015285356035840152605583015260558252608082019482861067ffffffffffffffff8711176105995750849052519020168152f35b604190634e487b7160e01b6000525260246000fd5b503461013b578060031936011261013b57600060018060a01b036105d68184541633146109b8565b81546001600160a01b031981168355167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a380f35b50903461026d578060031936011261026d576024359067ffffffffffffffff938483116107ff57366023840112156107ff57828101359485116105995781519260209561066387601f19601f8401160186610973565b8085528685019136602483830101116107fb5781879260248a93018537860101526001546001600160a01b039190821633036107eb5783516101206106aa89820183610973565b80825288820190610b24823961070686805180946106d08d830195869251928391610995565b8101877f0000000000000000000000000000000000000000000000000000000000000000168d820152038b810185520183610973565b843591519088f5908282169586156107db5751879283929083905af1156107cc577f00000000000000000000000000000000000000000000000000000000000000001690813b156102155783602486928386519586948593632210724360e11b85528401525af180156107c25783929185916107a9575b50507fc3c6d916da28fe0977086840c3108d78b0e986020368c8d4150aedcb466b423f90519380a28152f35b6107b591929350610949565b610219578190833861077d565b82513d86823e3d90fd5b509051635b10109160e01b8152fd5b85516301e05a4360e31b81528590fd5b83516383f090e360e01b81528390fd5b8680fd5b8380fd5b50918291346102fc57806003193601126102fc5761081f61092e565b83546001600160a01b039061083790821633146109b8565b807f000000000000000000000000000000000000000000000000000000000000000016803b1561038c578592836044928651978895869463040b850f60e31b8652169084015260243560248401525af19081156102ee57506102de5750f35b50919060203660031901126102195782823563ffffffff811680910361026d5781546001600160a01b03906108ce90821633146109b8565b7f00000000000000000000000000000000000000000000000000000000000000001693843b156102195760249084519586938492621cb65b60e51b845283015234905af19081156102ee5750610922575080f35b61092b90610949565b80f35b600435906001600160a01b038216820361094457565b600080fd5b67ffffffffffffffff811161095d57604052565b634e487b7160e01b600052604160045260246000fd5b90601f8019910116810190811067ffffffffffffffff82111761095d57604052565b60005b8381106109a85750506000910152565b8181015183820152602001610998565b156109bf57565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fdfe60803461007f57601f61012038819003918201601f19168301916001600160401b038311848410176100845780849260209460405283398101031261007f57516001600160a01b038116810361007f577f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc556040516085908161009b8239f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe60806040527f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc54600090819081906001600160a01b0316368280378136915af43d82803e15604b573d90f35b3d90fdfea2646970667358221220980cdf9965f9bd170364065c55a84a487c12a0f9aa8ad1e49027cf70dd2149fd64736f6c6343000811003360803461007f57601f61012038819003918201601f19168301916001600160401b038311848410176100845780849260209460405283398101031261007f57516001600160a01b038116810361007f577f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc556040516085908161009b8239f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe60806040527f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc54600090819081906001600160a01b0316368280378136915af43d82803e15604b573d90f35b3d90fdfea2646970667358221220980cdf9965f9bd170364065c55a84a487c12a0f9aa8ad1e49027cf70dd2149fd64736f6c63430008110033a2646970667358221220c2faff00eb5b7674141b623f1d2d55a4a59147702c9bc75f535ec6adb3a9beb764736f6c63430008110033";

type AccountFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AccountFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AccountFactory__factory extends ContractFactory {
  constructor(...args: AccountFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    implementation: AddressLike,
    registry: AddressLike,
    entrypoint_: AddressLike,
    deployer: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      implementation,
      registry,
      entrypoint_,
      deployer,
      overrides || {}
    );
  }
  override deploy(
    implementation: AddressLike,
    registry: AddressLike,
    entrypoint_: AddressLike,
    deployer: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      implementation,
      registry,
      entrypoint_,
      deployer,
      overrides || {}
    ) as Promise<
      AccountFactory & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): AccountFactory__factory {
    return super.connect(runner) as AccountFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AccountFactoryInterface {
    return new Interface(_abi) as AccountFactoryInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): AccountFactory {
    return new Contract(address, _abi, runner) as unknown as AccountFactory;
  }
}