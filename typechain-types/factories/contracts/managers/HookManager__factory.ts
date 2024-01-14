/**
 * Copyright Clave - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */
/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  HookManager,
  HookManagerInterface,
} from "../../../contracts/managers/HookManager";
import { Contract, Interface, type ContractRunner } from "ethers";

const _abi = [
  {
    inputs: [],
    name: "ADDRESS_ALREADY_EXISTS",
    type: "error",
  },
  {
    inputs: [],
    name: "ADDRESS_NOT_EXISTS",
    type: "error",
  },
  {
    inputs: [],
    name: "EMPTY_HOOK_ADDRESS",
    type: "error",
  },
  {
    inputs: [],
    name: "HOOK_ERC165_FAIL",
    type: "error",
  },
  {
    inputs: [],
    name: "INVALID_ADDRESS",
    type: "error",
  },
  {
    inputs: [],
    name: "INVALID_KEY",
    type: "error",
  },
  {
    inputs: [],
    name: "NOT_FROM_HOOK",
    type: "error",
  },
  {
    inputs: [],
    name: "NOT_FROM_SELF_OR_MODULE",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "hook",
        type: "address",
      },
    ],
    name: "AddHook",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "hook",
        type: "address",
      },
    ],
    name: "RemoveHook",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "hookAndData",
        type: "bytes",
      },
      {
        internalType: "bool",
        name: "isValidation",
        type: "bool",
      },
    ],
    name: "addHook",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "address",
        name: "hook",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
    ],
    name: "getHookData",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "isHook",
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
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "isModule",
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
    inputs: [
      {
        internalType: "bool",
        name: "isValidation",
        type: "bool",
      },
    ],
    name: "listHooks",
    outputs: [
      {
        internalType: "address[]",
        name: "hookList",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "hook",
        type: "address",
      },
      {
        internalType: "bool",
        name: "isValidation",
        type: "bool",
      },
    ],
    name: "removeHook",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "pubKey",
        type: "bytes",
      },
    ],
    name: "resetOwners",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "setHookData",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class HookManager__factory {
  static readonly abi = _abi;
  static createInterface(): HookManagerInterface {
    return new Interface(_abi) as HookManagerInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): HookManager {
    return new Contract(address, _abi, runner) as unknown as HookManager;
  }
}