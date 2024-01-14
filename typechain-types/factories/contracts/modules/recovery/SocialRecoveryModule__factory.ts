/**
 * Copyright Clave - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */
/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { NonPayableOverrides } from "../../../../common";
import type {
  SocialRecoveryModule,
  SocialRecoveryModuleInterface,
} from "../../../../contracts/modules/recovery/SocialRecoveryModule";
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  BigNumberish,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";

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
        name: "version",
        type: "string",
      },
      {
        internalType: "uint128",
        name: "minTimelock",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "minThreshold",
        type: "uint128",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ALREADY_INITED",
    type: "error",
  },
  {
    inputs: [],
    name: "GUARDIANS_MUST_BE_SORTED",
    type: "error",
  },
  {
    inputs: [],
    name: "INSUFFICIENT_GUARDIANS",
    type: "error",
  },
  {
    inputs: [],
    name: "INVALID_GUARDIAN",
    type: "error",
  },
  {
    inputs: [],
    name: "INVALID_RECOVERY_CONFIG",
    type: "error",
  },
  {
    inputs: [],
    name: "INVALID_RECOVERY_NONCE",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidShortString",
    type: "error",
  },
  {
    inputs: [],
    name: "MODULE_NOT_ADDED_CORRECTLY",
    type: "error",
  },
  {
    inputs: [],
    name: "MODULE_NOT_REMOVED_CORRECTLY",
    type: "error",
  },
  {
    inputs: [],
    name: "RECOVERY_IN_PROGRESS",
    type: "error",
  },
  {
    inputs: [],
    name: "RECOVERY_NOT_INITED",
    type: "error",
  },
  {
    inputs: [],
    name: "RECOVERY_NOT_STARTED",
    type: "error",
  },
  {
    inputs: [],
    name: "RECOVERY_TIMELOCK",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "str",
        type: "string",
      },
    ],
    name: "StringTooLong",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Disabled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "EIP712DomainChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Inited",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "newOwner",
        type: "bytes",
      },
    ],
    name: "RecoveryExecuted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "newOwner",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timelockExpiry",
        type: "uint256",
      },
    ],
    name: "RecoveryStarted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "RecoveryStopped",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint128",
            name: "timelock",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "threshold",
            type: "uint128",
          },
          {
            internalType: "address[]",
            name: "guardians",
            type: "address[]",
          },
        ],
        indexed: false,
        internalType: "struct SocialRecoveryModule.RecoveryConfig",
        name: "config",
        type: "tuple",
      },
    ],
    name: "UpdateConfig",
    type: "event",
  },
  {
    inputs: [],
    name: "MIN_THRESHOLD",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MIN_TIMELOCK",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "disable",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "eip712Domain",
    outputs: [
      {
        internalType: "bytes1",
        name: "fields",
        type: "bytes1",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "version",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "verifyingContract",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "uint256[]",
        name: "extensions",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recoveringAddress",
        type: "address",
      },
    ],
    name: "executeRecovery",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "recoveringAddress",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "newOwner",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
        ],
        internalType: "struct BaseRecovery.RecoveryData",
        name: "recoveryData",
        type: "tuple",
      },
    ],
    name: "getEip712Hash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
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
    name: "getGuardians",
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
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getThreshold",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
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
    name: "getTimelock",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "initData",
        type: "bytes",
      },
    ],
    name: "init",
    outputs: [],
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
    name: "isInited",
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
        name: "account",
        type: "address",
      },
    ],
    name: "isRecovering",
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
    name: "recoveryDataTypeHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "recoveryNonces",
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
        name: "",
        type: "address",
      },
    ],
    name: "recoveryStates",
    outputs: [
      {
        internalType: "uint256",
        name: "timelockExpiry",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "newOwner",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "recoveringAddress",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "newOwner",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
        ],
        internalType: "struct BaseRecovery.RecoveryData",
        name: "recoveryData",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "address",
            name: "guardian",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct SocialRecoveryModule.GuardianData[]",
        name: "guardianData",
        type: "tuple[]",
      },
    ],
    name: "startRecovery",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stopRecovery",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
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
        components: [
          {
            internalType: "uint128",
            name: "timelock",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "threshold",
            type: "uint128",
          },
          {
            internalType: "address[]",
            name: "guardians",
            type: "address[]",
          },
        ],
        internalType: "struct SocialRecoveryModule.RecoveryConfig",
        name: "config",
        type: "tuple",
      },
    ],
    name: "updateConfig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6101a08060405234620001b7576200246d8038038091620000218285620001bc565b83398101608082820312620001b75781516001600160401b039190828111620001b757816200005291850162000205565b90602084015190838211620001b7576200006e91850162000205565b926200008b6060620000836040840162000260565b920162000260565b91620000978162000275565b610120908152620000a88662000429565b9161014092835260208151910120958660e0526020815191012095610100968088524660a0526040519060208201927f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f8452604083015260608201524660808201523060a082015260a0815260c081019681881090881117620001a157866040525190206080523060c052610160928352610180938452611ef7958662000576873960805186611a51015260a05186611b0c015260c05186611a1b015260e05186611aa001525185611ac6015251846107420152518361076b015251828181610e370152611c3c015251818181610b990152611cd80152f35b634e487b7160e01b600052604160045260246000fd5b600080fd5b601f909101601f19168101906001600160401b03821190821017620001a157604052565b60005b838110620001f45750506000910152565b8181015183820152602001620001e3565b81601f82011215620001b75780516001600160401b038111620001a157604051926200023c601f8301601f191660200185620001bc565b81845260208284010111620001b7576200025d9160208085019101620001e0565b90565b51906001600160801b0382168203620001b757565b80516020919082811015620002f5575090601f825111620002b35780825192015190808310620002a457501790565b82600019910360031b1b161790565b604490620002e79260405193849263305a27a960e01b845280600485015282519283918260248701528686019101620001e0565b601f01601f19168101030190fd5b6001600160401b038111620001a1576000928354926001938481811c911680156200041e575b838210146200040a57601f8111620003d4575b5081601f84116001146200036d5750928293918392869462000361575b50501b916000199060031b1c191617905560ff90565b0151925038806200034b565b919083601f1981168780528488209488905b88838310620003b957505050106200039f575b505050811b01905560ff90565b015160001960f88460031b161c1916905538808062000392565b8587015188559096019594850194879350908101906200037f565b85805284601f848820920160051c820191601f860160051c015b828110620003fe5750506200032e565b878155018590620003ee565b634e487b7160e01b86526022600452602486fd5b90607f16906200031b565b805160209081811015620004565750601f825111620002b35780825192015190808310620002a457501790565b9192916001600160401b038111620001a15760019182548381811c911680156200056a575b828210146200055457601f81116200051b575b5080601f8311600114620004ce575081929394600092620004c2575b5050600019600383901b1c191690821b17905560ff90565b015190503880620004aa565b90601f198316958460005282600020926000905b8882106200050357505083859697106200039f57505050811b01905560ff90565b808785968294968601518155019501930190620004e2565b8360005283601f83600020920160051c820191601f850160051c015b828110620005475750506200048e565b6000815501849062000537565b634e487b7160e01b600052602260045260246000fd5b90607f16906200047b56fe60806040526004361015610013575b600080fd5b60003560e01c806301ffc9a71461018f57806306f45247146101865780630f23795f1461017d5780632cc88e7a146101745780632f2770db1461016b5780633bc2c4a7146101625780634ddf47d4146101595780635c63cca214610150578063789771681461014757806384b0196e1461013e57806399bdfe6a14610135578063b34313af1461012c578063bbd855f814610123578063bd11c4c01461011a578063bf1e799b14610111578063d033090e14610108578063d59bd0e6146100ff578063f18858ab146100f65763fb0c7549146100ee57600080fd5b61000e610e16565b5061000e610dc1565b5061000e610d12565b5061000e610c04565b5061000e610bbd565b5061000e610b78565b5061000e610b49565b5061000e610b09565b5061000e6109f4565b5061000e610726565b5061000e6106a5565b5061000e61065a565b5061000e610549565b5061000e610406565b5061000e610305565b5061000e6102c9565b5061000e61028c565b5061000e610208565b5061000e6101aa565b6001600160e01b031981160361000e57565b503461000e57602036600319011261000e5760206004356101ca81610198565b6001600160e01b03191680159081156101e9575b506040519015158152f35b6301ffc9a760e01b149050386101de565b9081606091031261000e5790565b503461000e57604036600319011261000e576001600160401b0360043581811161000e5761023a9036906004016101fa565b906024359181831161000e573660238401121561000e57826004013591821161000e573660248360051b8501011161000e576024610279930190611486565b005b6001600160a01b0381160361000e57565b503461000e57602036600319011261000e5760206102b46004356102af8161027b565b611b32565b6040519015158152f35b600091031261000e57565b503461000e57600036600319011261000e5760206040517f9de3f0221a6aa6fb3f1d42d440b3e2a841e76936985e37dc5936319614f71cd58152f35b503461000e576000806003193601126104035761032861032433611b32565b1590565b6103f1576040516342f6e38960e01b8152306004820152602081602481335afa9081156103e4575b82916103b6575b506103a457336000908152600460205260409020610374906110d1565b337ff54453d15e2e6aee566733e6da03165ea58500408e802e05aa4e75f2408f59fe8280a26103a1611dcc565b80f35b604051631a0321d160e21b8152600490fd5b6103d7915060203d81116103dd575b6103cf81836108c2565b810190611037565b38610357565b503d6103c5565b6103ec61104f565b610350565b60405163d0f6fdbf60e01b8152600490fd5b80fd5b503461000e57602036600319011261000e576004356104248161027b565b6001600160a01b038116600090815260026020526040902061044590611d16565b9081511561053757815142106105255760209190910180516001600160a01b0383169291833b1561000e576104ed6104e87f4ae5a353bf30cfecfb4b910d4e0c97be0f94616e53d0befd46d8a22ddbe63d2e946104bb60006104fa9660405180938192631d9fd1a760e11b835260048301611d69565b0381838c5af18015610518575b6104ff575b506001600160a01b0316600090815260026020526040902090565b611d7a565b5160405191829182611d69565b0390a2005b8061050c61051292610836565b806102be565b386104cd565b61052061104f565b6104c8565b604051630a83562d60e11b8152600490fd5b60405163535251d560e11b8152600490fd5b503461000e57602036600319011261000e576004356001600160401b0380821161000e573660238301121561000e57816004013590811161000e5781016024019036821161000e5761059a33611b32565b610648576040516342f6e38960e01b8152306004820152602081602481335afa90811561063b575b60009161061d575b501561060b576102799160246105e0920161092c565b337f4c3198fee40c6e645ecb6812a49b813b9860b73cb373c9729e1ad592f393fa48600080a2611c2d565b604051632d9ba3b160e21b8152600490fd5b610635915060203d81116103dd576103cf81836108c2565b386105ca565b61064361104f565b6105c2565b604051631b618ef960e31b8152600490fd5b503461000e57602036600319011261000e576004356001600160401b03811161000e5761069d61069861069360209336906004016101fa565b611e20565b6119f2565b604051908152f35b503461000e57602036600319011261000e576004356106c38161027b565b60018060a01b03166000526004602052602060406000205460801c604051908152f35b919082519283825260005b848110610712575050826000602080949584010152601f8019910116010190565b6020818301810151848301820152016106f1565b503461000e57600080600319360112610403576107d1906107667f0000000000000000000000000000000000000000000000000000000000000000610e5b565b61078f7f0000000000000000000000000000000000000000000000000000000000000000610f55565b916040519161079d83610871565b818352604051948594600f60f81b86526107c360209360e08589015260e08801906106e6565b9086820360408801526106e6565b904660608601523060808601528260a086015284820360c08601528080855193848152019401925b82811061080857505050500390f35b8351855286955093810193928101926001016107f9565b50634e487b7160e01b600052604160045260246000fd5b6001600160401b03811161084957604052565b61085161081f565b604052565b606081019081106001600160401b0382111761084957604052565b602081019081106001600160401b0382111761084957604052565b604081019081106001600160401b0382111761084957604052565b60c081019081106001600160401b0382111761084957604052565b90601f801991011681019081106001600160401b0382111761084957604052565b604051906108f08261088c565b565b35906001600160801b038216820361000e57565b6020906001600160401b03811161091f575b60051b0190565b61092761081f565b610918565b906020808383031261000e5782356001600160401b039384821161000e57019260608484031261000e576040519361096385610856565b61096c816108f2565b85526109798382016108f2565b83860152604081013591821161000e57019180601f8401121561000e5782356109a181610906565b936109af60405195866108c2565b818552838086019260051b82010192831161000e578301905b8282106109db5750505050604082015290565b83809183356109e98161027b565b8152019101906109c8565b503461000e576003196020368201811361000e57600435916001600160401b039081841161000e57606090843603011261000e5760405192610a3584610856565b610a41816004016108f2565b8452610a4f602482016108f2565b83850152604481013591821161000e5701903660238301121561000e57600482013591610a7b83610906565b92610a8960405194856108c2565b80845260248385019160051b8301019136831161000e57602401905b828210610af05785856040820152610abc33611b32565b156103f15733600090815260026020526040902054610ade5761027990611c2d565b604051638daa42a960e01b8152600490fd5b8380918335610afe8161027b565b815201910190610aa5565b503461000e57602036600319011261000e5760206102b4600435610b2c8161027b565b6001600160a01b0316600090815260026020526040902054151590565b503461000e57600036600319011261000e57336000908152600260205260409020541561053757610279611dcc565b503461000e57600036600319011261000e5760206040516001600160801b037f0000000000000000000000000000000000000000000000000000000000000000168152f35b503461000e57602036600319011261000e57600435610bdb8161027b565b60018060a01b0316600052600460205260206001600160801b0360406000205416604051908152f35b503461000e57602036600319011261000e57600435610c228161027b565b60018060a01b031660005260036020526020604060002054604051908152f35b90600182811c92168015610c72575b6020831014610c5c57565b634e487b7160e01b600052602260045260246000fd5b91607f1691610c51565b9060009291805491610c8d83610c42565b918282526001938481169081600014610cef5750600114610caf575b50505050565b90919394506000526020928360002092846000945b838610610cdb575050505001019038808080610ca9565b805485870183015294019385908201610cc4565b9294505050602093945060ff191683830152151560051b01019038808080610ca9565b503461000e57602036600319011261000e57600435610d308161027b565b60018060a01b0316600052600260205260016040600020610d64815491610d5d6040518095819301610c7c565b03836108c2565b610d8060405192839283526040602084015260408301906106e6565b0390f35b90815180825260208080930193019160005b828110610da4575050505090565b83516001600160a01b031685529381019392810192600101610d96565b503461000e57602036600319011261000e57600435610ddf8161027b565b60018060a01b03166000526004602052610d80610e026001604060002001611107565b604051918291602083526020830190610d84565b503461000e57600036600319011261000e5760206040516001600160801b037f0000000000000000000000000000000000000000000000000000000000000000168152f35b60ff8114610e995760ff811690601f8211610e875760405191610e7d8361088c565b8252602082015290565b604051632cd44ac360e21b8152600490fd5b50604051600081815491610eac83610c42565b80835292600190818116908115610f335750600114610ed6575b50610ed3925003826108c2565b90565b600080805291507f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5635b848310610f185750610ed3935050810160200138610ec6565b81935090816020925483858901015201910190918492610eff565b905060209250610ed394915060ff191682840152151560051b82010138610ec6565b60ff8114610f775760ff811690601f8211610e875760405191610e7d8361088c565b50604051600081600191825492610f8d84610c42565b80845293818116908115610f335750600114610fb05750610ed3925003826108c2565b600081815291507fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf65b848310610ff25750610ed3935050810160200138610ec6565b81935090816020925483858901015201910190918492610fd9565b6020906001600160401b03811161102a575b601f01601f19160190565b61103261081f565b61101f565b9081602091031261000e5751801515810361000e5790565b506040513d6000823e3d90fd5b50634e487b7160e01b600052601160045260246000fd5b81811061107e575050565b60008155600101611073565b906801000000000000000081116110c4575b8154908083558181106110ae57505050565b6108f09260005260206000209182019101611073565b6110cc61081f565b61109c565b6001906000815501805460008255806110e8575050565b6108f091600052602060002090810190611073565b35610ed38161027b565b9060405191828154918282526020928383019160005283600020936000905b82821061113c575050506108f0925003836108c2565b85546001600160a01b031684526001958601958895509381019390910190611126565b90604051606081018181106001600160401b038211176111a7575b60405260406111a26001839580546001600160801b038116865260801c602086015201611107565b910152565b6111af61081f565b61117a565b50634e487b7160e01b600052603260045260246000fd5b91908110156111ee575b60051b81013590603e198136030182121561000e570190565b6111f66111b4565b6111d5565b9291926112078261100d565b9161121560405193846108c2565b82948184528183011161000e578281602093846000960137010152565b60408136031261000e5760408051916001600160401b0391830182811184821017611299575b60405280356112668161027b565b8352602081013591821161000e570136601f8201121561000e576112919036906020813591016111fb565b602082015290565b6112a161081f565b611258565b60209181518110156112bb575b60051b010190565b6112c36111b4565b6112b3565b60019060001981146112d8570190565b6112e061105c565b0190565b919082018092116112f157565b6108f061105c565b903590601e198136030182121561000e57018035906001600160401b03821161000e5760200191813603831361000e57565b9190601f811161133a57505050565b6108f0926000526020600020906020601f840160051c83019310611366575b601f0160051c0190611073565b9091508190611359565b81518155600180910191602080910151908151916001600160401b03831161144a575b6113a7836113a18754610c42565b8761132b565b81601f84116001146113e057509282939183926000946113d5575b50501b916000199060031b1c1916179055565b0151925038806113c2565b919083601f1981166113f788600052602060002090565b946000905b888383106114305750505010611417575b505050811b019055565b015160001960f88460031b161c1916905538808061140d565b8587015188559096019594850194879350908101906113fc565b61145261081f565b611393565b9392918060609160209360408852816040890152838801376000828288010152601f8019910116850101930152565b90611490826110fd565b6001600160a01b038116600090815260026020526040902054909290610ade576114bc61032484611b32565b6103f1576001600160a01b03831660009081526004602052604090206114e19061115f565b6001600160a01b0384166000908152600360205260409020909490549260409384840135036117715761151661069884611e20565b60009287860191849182905b80841061165c5750505050505061155261154660208701516001600160801b031690565b6001600160801b031690565b1161164b57916116466115469261162e6115a161161e7fdd4c80cd8b88847dd9d579e0c68308e82bffc7bbb4abd7fa469fd9532d788489976115a76115a16115468c516001600160801b031690565b426112e4565b906115f560208201926115cf6115bd85856112f9565b6115c56108e3565b93845236916111fb565b60208201526115f08a60018060a01b03166000526002602052604060002090565b611370565b6001600160a01b038816600090815260036020526040902061161781546112c8565b90556112f9565b969098516001600160801b031690565b90516001600160a01b03909316959293849384611457565b0390a2565b8151637629075d60e01b8152600490fd5b929861167b6116768b86899f969b9a9c999e95989e6111cb565b611232565b80519097906001600160a01b03169c6001600160a01b03808f169716871115611760576000958e9190878f5b518051821015611747576116ce6116c1836116da936112a6565b516001600160a01b031690565b6001600160a01b031690565b8a146116e9576001018f6116a7565b50949d9750955096999760019d9199949d9b929b5b1561173657602001516117129185906117fe565b611722575b600101929490611522565b9561172e6001916112c8565b969050611717565b8a516311a2a82b60e01b8152600490fd5b5050949d9750959d9199949d9b929b9a9890979a6116fe565b875163c52b41f760e01b8152600490fd5b83516304c64fc760e11b8152600490fd5b6005111561178c57565b634e487b7160e01b600052602160045260246000fd5b604090610ed39392815281602082015201906106e6565b3d156117e4573d906117ca8261100d565b916117d860405193846108c2565b82523d6000602084013e565b606090565b9081602091031261000e5751610ed381610198565b909161180a81846118c1565b61181381611782565b1590816118ab575b506118a3576000918291604051611857816118496020820194630b135d3f60e11b998a8752602484016117a2565b03601f1981018352826108c2565b51915afa906118646117b9565b82611897575b8261187457505090565b90915061189263ffffffff60e01b91602080825183010191016117e9565b161490565b8051602014925061186a565b505050600190565b6001600160a01b0384811691161490503861181b565b8151604181036118ee5750906118ea916020820151906060604084015193015160001a9061193c565b9091565b6040036119325781604060206118ea9401519101519160ff83811c93601b8501809511611925575b600180831b031693169061193c565b61192d61105c565b611916565b5050600090600290565b9291907f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a083116119e65760ff16601b811415806119db575b6119cf579160809493916020936040519384528484015260408301526060820152600093849182805260015afa156119c2575b81516001600160a01b038116156119bc579190565b50600190565b6119ca61104f565b6119a7565b50505050600090600490565b50601c811415611974565b50505050600090600390565b6042906119fd611a18565b906040519161190160f01b8352600283015260228201522090565b307f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03161480611b09575b15611a73577f000000000000000000000000000000000000000000000000000000000000000090565b60405160208101907f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f82527f000000000000000000000000000000000000000000000000000000000000000060408201527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a082015260a08152611b03816108a7565b51902090565b507f00000000000000000000000000000000000000000000000000000000000000004614611a4a565b6001600160a01b03166000908152600460205260409020546001600160801b0316151590565b815160208084015160801b6fffffffffffffffffffffffffffffffff19166001600160801b03929092169190911782556040909201518051600193909284019181906001600160401b038511611be9575b611bb3858561108a565b0191600052806000209060005b848110611bcf57505050505050565b83516001600160a01b031683820155928101928501611bc0565b611bf161081f565b611ba9565b60806040610ed393602084526001600160801b03808251166020860152602082015116828501520151916060808201520190610d84565b6001600160801b0380825116817f000000000000000000000000000000000000000000000000000000000000000016109081611cff575b81611ccc575b5015611cba57336000908152600460205260409020611c8a908290611b58565b7feac3001dc43e0d039cd0c5e6788d8f13a41b2f8700f17c1e9d30fd7dc6c674f560405180611646339482611bf6565b60405163f774f43960e01b8152600490fd5b809150602083015116907f0000000000000000000000000000000000000000000000000000000000000000161038611c6a565b809150602083015116604083015151101590611c64565b9060016020604051604081018181106001600160401b03821117611d5c575b604052611d58819580548352611d516040518096819301610c7c565b03846108c2565b0152565b611d6461081f565b611d35565b906020610ed39281815201906106e6565b600160009182815501611d8d8154610c42565b80611d9757505050565b601f8111600114611da6575055565b81835260208320611dc291601f0160051c810190600101611073565b8160208120915555565b33600090815260026020526040902054611de257565b336000526002602052611df86040600020611d7a565b337fe1f70ab451e5a5f7a754771f5987e6240059f216e60016f426f4684a6534b591600080a2565b803590611e2c8261027b565b6040611e45611e3e60208401846112f9565b36916111fb565b602081519101209181519260208401947f9de3f0221a6aa6fb3f1d42d440b3e2a841e76936985e37dc5936319614f71cd5865260018060a01b0316838501526060840152013560808201526080815260a081018181106001600160401b03821117611eb4575b60405251902090565b611ebc61081f565b611eab56fea26469706673582212204ed0c6be6cd33e6be726723e5cff5384af3e9ee1c929c7482ef48e418a6b249b64736f6c63430008110033";

type SocialRecoveryModuleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SocialRecoveryModuleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SocialRecoveryModule__factory extends ContractFactory {
  constructor(...args: SocialRecoveryModuleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    name: string,
    version: string,
    minTimelock: BigNumberish,
    minThreshold: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      name,
      version,
      minTimelock,
      minThreshold,
      overrides || {}
    );
  }
  override deploy(
    name: string,
    version: string,
    minTimelock: BigNumberish,
    minThreshold: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      name,
      version,
      minTimelock,
      minThreshold,
      overrides || {}
    ) as Promise<
      SocialRecoveryModule & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): SocialRecoveryModule__factory {
    return super.connect(runner) as SocialRecoveryModule__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SocialRecoveryModuleInterface {
    return new Interface(_abi) as SocialRecoveryModuleInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): SocialRecoveryModule {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as SocialRecoveryModule;
  }
}
