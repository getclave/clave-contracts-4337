/**
 * Copyright Clave - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */
/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  IERC1271Upgradeable,
  IERC1271UpgradeableInterface,
} from "../../../../@openzeppelin/contracts-upgradeable/interfaces/IERC1271Upgradeable";
import { Contract, Interface, type ContractRunner } from "ethers";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "isValidSignature",
    outputs: [
      {
        internalType: "bytes4",
        name: "magicValue",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IERC1271Upgradeable__factory {
  static readonly abi = _abi;
  static createInterface(): IERC1271UpgradeableInterface {
    return new Interface(_abi) as IERC1271UpgradeableInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IERC1271Upgradeable {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as IERC1271Upgradeable;
  }
}