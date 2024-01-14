/**
 * Copyright Clave - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */
/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { NonPayableOverrides } from "../../../common";
import type {
  EOAValidator,
  EOAValidatorInterface,
} from "../../../contracts/validators/EOAValidator";
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "signedHash",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "validateSignature",
    outputs: [
      {
        internalType: "address",
        name: "signer",
        type: "address",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608080604052346100165761031f908161001c8239f35b600080fdfe60806040526004361015610013575b600080fd5b6000803560e01c90816301ffc9a71461003e575063333daf921461003657600080fd5b61000e610097565b34610094576020366003190112610094576004359063ffffffff60e01b8216809203610094575063199ed7c960e11b8114908115610083575b50151560805260206080f35b6301ffc9a760e01b14905081610077565b80fd5b503461000e57604036600319011261000e5767ffffffffffffffff60243581811161000e573660238201121561000e57806004013591821161000e57366024838301011161000e5761010c9160246100f29201600435610127565b6040516001600160a01b0390911681529081906020820190565b0390f35b50634e487b7160e01b600052604160045260246000fd5b91909167ffffffffffffffff91828111610193575b60405192601f8201601f19908116603f0116840190811184821017610186575b604052808352368185011161000e576020816000926101829683870137840101526101a0565b5090565b61018e610110565b61015c565b61019b610110565b61013c565b8151604181036101cd5750906101c9916020820151906060604084015193015160001a90610233565b9091565b60400361021c5760406020830151920151918260ff1c91601b8301809311610206576101c9936001600160ff1b03169260ff1690610233565b634e487b7160e01b600052601160045260246000fd5b5050600090600290565b506040513d6000823e3d90fd5b9291907f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a083116102dd5760ff16601b811415806102d2575b6102c6579160809493916020936040519384528484015260408301526060820152600093849182805260015afa156102b9575b81516001600160a01b038116156102b3579190565b50600190565b6102c1610226565b61029e565b50505050600090600490565b50601c81141561026b565b5050505060009060039056fea2646970667358221220f70f8687a8101a6b0c25ebfea59802ff360d7750f1b7ada79a2d723966872f9264736f6c63430008110033";

type EOAValidatorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EOAValidatorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class EOAValidator__factory extends ContractFactory {
  constructor(...args: EOAValidatorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      EOAValidator & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): EOAValidator__factory {
    return super.connect(runner) as EOAValidator__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EOAValidatorInterface {
    return new Interface(_abi) as EOAValidatorInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): EOAValidator {
    return new Contract(address, _abi, runner) as unknown as EOAValidator;
  }
}