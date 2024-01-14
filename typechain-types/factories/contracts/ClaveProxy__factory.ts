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
  ClaveProxy,
  ClaveProxyInterface,
} from "../../contracts/ClaveProxy";
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
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
] as const;

const _bytecode =
  "0x60803461007f57601f61012038819003918201601f19168301916001600160401b038311848410176100845780849260209460405283398101031261007f57516001600160a01b038116810361007f577f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc556040516085908161009b8239f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe60806040527f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc54600090819081906001600160a01b0316368280378136915af43d82803e15604b573d90f35b3d90fdfea2646970667358221220980cdf9965f9bd170364065c55a84a487c12a0f9aa8ad1e49027cf70dd2149fd64736f6c63430008110033";

type ClaveProxyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ClaveProxyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ClaveProxy__factory extends ContractFactory {
  constructor(...args: ClaveProxyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    implementation: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(implementation, overrides || {});
  }
  override deploy(
    implementation: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(implementation, overrides || {}) as Promise<
      ClaveProxy & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): ClaveProxy__factory {
    return super.connect(runner) as ClaveProxy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ClaveProxyInterface {
    return new Interface(_abi) as ClaveProxyInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): ClaveProxy {
    return new Contract(address, _abi, runner) as unknown as ClaveProxy;
  }
}
