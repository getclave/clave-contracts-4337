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
  CloudRecoveryModule,
  CloudRecoveryModuleInterface,
} from "../../../../contracts/modules/recovery/CloudRecoveryModule";
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
        internalType: "uint256",
        name: "timelock",
        type: "uint256",
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
    name: "INVALID_GUARDIAN_SIGNATURE",
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
    inputs: [],
    name: "ZERO_ADDRESS_GUARDIAN",
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
        indexed: true,
        internalType: "address",
        name: "guardian",
        type: "address",
      },
    ],
    name: "UpdateGuardian",
    type: "event",
  },
  {
    inputs: [],
    name: "TIMELOCK",
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
    name: "getGuardian",
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
        internalType: "bytes",
        name: "signature",
        type: "bytes",
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
        internalType: "address",
        name: "guardian",
        type: "address",
      },
    ],
    name: "updateGuardian",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x61018080604052346200018b5762001cf1803803809162000021828562000190565b833981016060828203126200018b5781516001600160401b0391908281116200018b578162000052918501620001d9565b9060208401518381116200018b5760409162000070918601620001d9565b930151906200007f8162000234565b6101209081526200009085620003e8565b9161014092835260208151910120948560e0526020815191012094610100958087524660a0526040519060208201927f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f8452604083015260608201524660808201523060a082015260a0815260c0810195818710908711176200017557856040525190206080523060c0526101609283526117bc948562000535863960805185611494015260a0518561154f015260c0518561145e015260e051856114e301525184611509015251836109530152518261097c0152518181816107a201526108d40152f35b634e487b7160e01b600052604160045260246000fd5b600080fd5b601f909101601f19168101906001600160401b038211908210176200017557604052565b60005b838110620001c85750506000910152565b8181015183820152602001620001b7565b81601f820112156200018b5780516001600160401b03811162000175576040519262000210601f8301601f19166020018562000190565b818452602082840101116200018b57620002319160208085019101620001b4565b90565b80516020919082811015620002b4575090601f8251116200027257808251920151908083106200026357501790565b82600019910360031b1b161790565b604490620002a69260405193849263305a27a960e01b845280600485015282519283918260248701528686019101620001b4565b601f01601f19168101030190fd5b6001600160401b03811162000175576000928354926001938481811c91168015620003dd575b83821014620003c957601f811162000393575b5081601f84116001146200032c5750928293918392869462000320575b50501b916000199060031b1c191617905560ff90565b0151925038806200030a565b919083601f1981168780528488209488905b888383106200037857505050106200035e575b505050811b01905560ff90565b015160001960f88460031b161c1916905538808062000351565b8587015188559096019594850194879350908101906200033e565b85805284601f848820920160051c820191601f860160051c015b828110620003bd575050620002ed565b878155018590620003ad565b634e487b7160e01b86526022600452602486fd5b90607f1690620002da565b805160209081811015620004155750601f8251116200027257808251920151908083106200026357501790565b9192916001600160401b038111620001755760019182548381811c9116801562000529575b828210146200051357601f8111620004da575b5080601f83116001146200048d57508192939460009262000481575b5050600019600383901b1c191690821b17905560ff90565b01519050388062000469565b90601f198316958460005282600020926000905b888210620004c257505083859697106200035e57505050811b01905560ff90565b808785968294968601518155019501930190620004a1565b8360005283601f83600020920160051c820191601f850160051c015b828110620005065750506200044d565b60008155018490620004f6565b634e487b7160e01b600052602260045260246000fd5b90607f16906200043a56fe60806040526004361015610013575b600080fd5b60003560e01c806301ffc9a7146101535780630f23795f1461014a5780632cc88e7a146101415780632f2770db146101385780633bc2c4a71461012f5780634ddf47d4146101265780635c63cca21461011d57806372c63be3146101145780637aadef8b1461010b57806384b0196e14610102578063b301d902146100f9578063b34313af146100f0578063bbd855f8146100e7578063d033090e146100de578063d59bd0e6146100d55763fc525395146100cd57600080fd5b61000e610d08565b5061000e610c96565b5061000e610adf565b5061000e610ab0565b5061000e610a70565b5061000e610a30565b5061000e610937565b5061000e6108bb565b5061000e610662565b5061000e610617565b5061000e6104eb565b5061000e61037b565b5061000e610263565b5061000e610227565b5061000e6101cf565b5061000e61016e565b6001600160e01b031981160361000e57565b503461000e57602036600319011261000e57602060043561018e8161015c565b6001600160e01b03191680159081156101ad575b506040519015158152f35b6301ffc9a760e01b149050386101a2565b6001600160a01b0381160361000e57565b503461000e57602036600319011261000e5760206102126004356101f2816101be565b6001600160a01b0390811660009081526004602052604090205416151590565b6040519015158152f35b600091031261000e57565b503461000e57600036600319011261000e5760206040517f9de3f0221a6aa6fb3f1d42d440b3e2a841e76936985e37dc5936319614f71cd58152f35b503461000e5760008060031936011261037857336000908152600460205260409020546001600160a01b031615610299565b1590565b610366576040516342f6e38960e01b8152306004820152602081602481335afa908115610359575b829161032b575b506103195733600081815260046020526040902080546001600160a01b03191690557ff54453d15e2e6aee566733e6da03165ea58500408e802e05aa4e75f2408f59fe8280a2610316611691565b80f35b604051631a0321d160e21b8152600490fd5b61034c915060203d8111610352575b6103448183610c75565b810190610f5e565b386102c8565b503d61033a565b610361610f76565b6102c1565b60405163d0f6fdbf60e01b8152600490fd5b80fd5b503461000e57602036600319011261000e57600435610399816101be565b6001600160a01b03811660009081526002602052604090206103ba906115db565b908151156104ac578151421061049a5760209190910180516001600160a01b0383169291833b1561000e5761046261045d7f4ae5a353bf30cfecfb4b910d4e0c97be0f94616e53d0befd46d8a22ddbe63d2e94610430600061046f9660405180938192631d9fd1a760e11b83526004830161162e565b0381838c5af1801561048d575b610474575b506001600160a01b0316600090815260026020526040902090565b61163f565b516040519182918261162e565b0390a2005b8061048161048792610c04565b8061021c565b38610442565b610495610f76565b61043d565b604051630a83562d60e11b8152600490fd5b60405163535251d560e11b8152600490fd5b9181601f8401121561000e578235916001600160401b03831161000e576020838186019501011161000e57565b503461000e57602036600319011261000e576004356001600160401b03811161000e5761051c9036906004016104be565b336000908152600460205260409020549091906001600160a01b03166105f7576040516342f6e38960e01b8152306004820152602081602481335afa9081156105ea575b6000916105cc575b50156105ba57610581816105b89361058d930190610f83565b6001600160a01b031690565b337f4c3198fee40c6e645ecb6812a49b813b9860b73cb373c9729e1ad592f393fa48600080a2611575565b005b604051632d9ba3b160e21b8152600490fd5b6105e4915060203d8111610352576103448183610c75565b38610568565b6105f2610f76565b610560565b604051631b618ef960e31b8152600490fd5b9081606091031261000e5790565b503461000e57602036600319011261000e576004356001600160401b03811161000e5761065a6106556106506020933690600401610609565b6116e5565b611435565b604051908152f35b503461000e5760408060031936011261000e576004906001600160401b0390823582811161000e576106979036908501610609565b9160243590811161000e576106af90369085016104be565b6106bb84959295610f98565b6001600160a01b03811660009081526003602052604090209095905484860135036108ab576001600160a01b03861660009081526002602052604090205461089b576001600160a01b03868116600090815260046020526040902054161561088b5761076f9161029591610769610734610655896116e5565b916107616107548b60018060a01b03166000526004602052604060002090565b546001600160a01b031690565b933691610fa2565b91611241565b61087d57507fdd4c80cd8b88847dd9d579e0c68308e82bffc7bbb4abd7fa469fd9532d7884899161046f6108659261085c7f0000000000000000000000000000000000000000000000000000000000000000966108416107cf8942610ff0565b9161082760208801936107f76107e5868b611005565b6107ed610d73565b9384523691610fa2565b60208201526108226108088a610f98565b6001600160a01b0316600090815260026020526040902090565b611093565b6001600160a01b0316600090815260036020526040902090565b61084b815461117a565b905561085685610f98565b94611005565b94909642610ff0565b90516001600160a01b03909316959293849384611196565b90516333045f0760e21b8152fd5b835163d0f6fdbf60e01b81528390fd5b8351638daa42a960e01b81528390fd5b83516304c64fc760e11b81528390fd5b503461000e57600036600319011261000e5760206040517f00000000000000000000000000000000000000000000000000000000000000008152f35b919082519283825260005b848110610923575050826000602080949584010152601f8019910116010190565b602081830181015184830182015201610902565b503461000e57600080600319360112610378576109e2906109777f0000000000000000000000000000000000000000000000000000000000000000610d82565b6109a07f0000000000000000000000000000000000000000000000000000000000000000610e7c565b91604051916109ae83610c24565b818352604051948594600f60f81b86526109d460209360e08589015260e08801906108f7565b9086820360408801526108f7565b904660608601523060808601528260a086015284820360c08601528080855193848152019401925b828110610a1957505050500390f35b835185528695509381019392810192600101610a0a565b503461000e57602036600319011261000e576020600435610a50816101be565b60018060a01b038091166000526004825260406000205416604051908152f35b503461000e57602036600319011261000e576020610212600435610a93816101be565b6001600160a01b0316600090815260026020526040902054151590565b503461000e57600036600319011261000e5733600090815260026020526040902054156104ac576105b8611691565b503461000e57602036600319011261000e57600435610afd816101be565b60018060a01b031660005260036020526020604060002054604051908152f35b90600182811c92168015610b4d575b6020831014610b3757565b634e487b7160e01b600052602260045260246000fd5b91607f1691610b2c565b9060009291805491610b6883610b1d565b918282526001938481169081600014610bca5750600114610b8a575b50505050565b90919394506000526020928360002092846000945b838610610bb6575050505001019038808080610b84565b805485870183015294019385908201610b9f565b9294505050602093945060ff191683830152151560051b01019038808080610b84565b50634e487b7160e01b600052604160045260246000fd5b6001600160401b038111610c1757604052565b610c1f610bed565b604052565b602081019081106001600160401b03821117610c1757604052565b604081019081106001600160401b03821117610c1757604052565b60c081019081106001600160401b03821117610c1757604052565b90601f801991011681019081106001600160401b03821117610c1757604052565b503461000e57602036600319011261000e57600435610cb4816101be565b60018060a01b0316600052600260205260016040600020610ce8815491610ce16040518095819301610b57565b0383610c75565b610d0460405192839283526040602084015260408301906108f7565b0390f35b503461000e57602036600319011261000e57600435610d26816101be565b336000908152600460205260409020546001600160a01b0316156103665733600090815260026020526040902054610d61576105b890611575565b604051638daa42a960e01b8152600490fd5b60405190610d8082610c3f565b565b60ff8114610dc05760ff811690601f8211610dae5760405191610da483610c3f565b8252602082015290565b604051632cd44ac360e21b8152600490fd5b50604051600081815491610dd383610b1d565b80835292600190818116908115610e5a5750600114610dfd575b50610dfa92500382610c75565b90565b600080805291507f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5635b848310610e3f5750610dfa935050810160200138610ded565b81935090816020925483858901015201910190918492610e26565b905060209250610dfa94915060ff191682840152151560051b82010138610ded565b60ff8114610e9e5760ff811690601f8211610dae5760405191610da483610c3f565b50604051600081600191825492610eb484610b1d565b80845293818116908115610e5a5750600114610ed75750610dfa92500382610c75565b600081815291507fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf65b848310610f195750610dfa935050810160200138610ded565b81935090816020925483858901015201910190918492610f00565b6020906001600160401b038111610f51575b601f01601f19160190565b610f59610bed565b610f46565b9081602091031261000e5751801515810361000e5790565b506040513d6000823e3d90fd5b9081602091031261000e5735610dfa816101be565b35610dfa816101be565b929192610fae82610f34565b91610fbc6040519384610c75565b82948184528183011161000e578281602093846000960137010152565b50634e487b7160e01b600052601160045260246000fd5b91908201809211610ffd57565b610d80610fd9565b903590601e198136030182121561000e57018035906001600160401b03821161000e5760200191813603831361000e57565b818110611042575050565b60008155600101611037565b9190601f811161105d57505050565b610d80926000526020600020906020601f840160051c83019310611089575b601f0160051c0190611037565b909150819061107c565b81518155600180910191602080910151908151916001600160401b03831161116d575b6110ca836110c48754610b1d565b8761104e565b81601f841160011461110357509282939183926000946110f8575b50501b916000199060031b1c1916179055565b0151925038806110e5565b919083601f19811661111a88600052602060002090565b946000905b88838310611153575050501061113a575b505050811b019055565b015160001960f88460031b161c19169055388080611130565b85870151885590960195948501948793509081019061111f565b611175610bed565b6110b6565b600190600019811461118a570190565b611192610fd9565b0190565b9392918060609160209360408852816040890152838801376000828288010152601f8019910116850101930152565b600511156111cf57565b634e487b7160e01b600052602160045260246000fd5b604090610dfa9392815281602082015201906108f7565b3d15611227573d9061120d82610f34565b9161121b6040519384610c75565b82523d6000602084013e565b606090565b9081602091031261000e5751610dfa8161015c565b909161124d8184611304565b611256816111c5565b1590816112ee575b506112e657600091829160405161129a8161128c6020820194630b135d3f60e11b998a8752602484016111e5565b03601f198101835282610c75565b51915afa906112a76111fc565b826112da575b826112b757505090565b9091506112d563ffffffff60e01b916020808251830101910161122c565b161490565b805160201492506112ad565b505050600190565b6001600160a01b0384811691161490503861125e565b81516041810361133157509061132d916020820151906060604084015193015160001a9061137f565b9091565b60400361137557816040602061132d9401519101519160ff83811c93601b8501809511611368575b600180831b031693169061137f565b611370610fd9565b611359565b5050600090600290565b9291907f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a083116114295760ff16601b8114158061141e575b611412579160809493916020936040519384528484015260408301526060820152600093849182805260015afa15611405575b81516001600160a01b038116156113ff579190565b50600190565b61140d610f76565b6113ea565b50505050600090600490565b50601c8114156113b7565b50505050600090600390565b60429061144061145b565b906040519161190160f01b8352600283015260228201522090565b307f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316148061154c575b156114b6577f000000000000000000000000000000000000000000000000000000000000000090565b60405160208101907f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f82527f000000000000000000000000000000000000000000000000000000000000000060408201527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a082015260a0815261154681610c5a565b51902090565b507f0000000000000000000000000000000000000000000000000000000000000000461461148d565b6001600160a01b031680156115c95733600081815260046020526040812080546001600160a01b031916841790557f7551e5209a0c23f0adfec529a159ff1b5ea874e7d67e81e2983319959474d7869080a3565b604051636de9b40160e01b8152600490fd5b9060016020604051604081018181106001600160401b03821117611621575b60405261161d8195805483526116166040518096819301610b57565b0384610c75565b0152565b611629610bed565b6115fa565b906020610dfa9281815201906108f7565b6001600091828155016116528154610b1d565b8061165c57505050565b601f811160011461166b575055565b8183526020832061168791601f0160051c810190600101611037565b8160208120915555565b336000908152600260205260409020546116a757565b3360005260026020526116bd604060002061163f565b337fe1f70ab451e5a5f7a754771f5987e6240059f216e60016f426f4684a6534b591600080a2565b8035906116f1826101be565b604061170a6117036020840184611005565b3691610fa2565b602081519101209181519260208401947f9de3f0221a6aa6fb3f1d42d440b3e2a841e76936985e37dc5936319614f71cd5865260018060a01b0316838501526060840152013560808201526080815260a081018181106001600160401b03821117611779575b60405251902090565b611781610bed565b61177056fea26469706673582212202befc8a033c5d5e5676e970ce8067664b9d2a9e7cc2cb520ad06931fff5e765664736f6c63430008110033";

type CloudRecoveryModuleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CloudRecoveryModuleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CloudRecoveryModule__factory extends ContractFactory {
  constructor(...args: CloudRecoveryModuleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    name: string,
    version: string,
    timelock: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(name, version, timelock, overrides || {});
  }
  override deploy(
    name: string,
    version: string,
    timelock: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(name, version, timelock, overrides || {}) as Promise<
      CloudRecoveryModule & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): CloudRecoveryModule__factory {
    return super.connect(runner) as CloudRecoveryModule__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CloudRecoveryModuleInterface {
    return new Interface(_abi) as CloudRecoveryModuleInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): CloudRecoveryModule {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as CloudRecoveryModule;
  }
}