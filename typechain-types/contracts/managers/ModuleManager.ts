/**
 * Copyright Clave - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */
/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../common";
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";

export interface ModuleManagerInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "addModule"
      | "entrypoint"
      | "executeFromModule"
      | "isHook"
      | "isModule"
      | "listModules"
      | "removeModule"
      | "resetOwners"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "AddModule" | "RemoveModule"): EventFragment;

  encodeFunctionData(
    functionFragment: "addModule",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "entrypoint",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "executeFromModule",
    values: [AddressLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "isHook", values: [AddressLike]): string;
  encodeFunctionData(
    functionFragment: "isModule",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "listModules",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "removeModule",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "resetOwners",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "addModule", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "entrypoint", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "executeFromModule",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isHook", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isModule", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "listModules",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeModule",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "resetOwners",
    data: BytesLike
  ): Result;
}

export namespace AddModuleEvent {
  export type InputTuple = [module: AddressLike];
  export type OutputTuple = [module: string];
  export interface OutputObject {
    module: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RemoveModuleEvent {
  export type InputTuple = [module: AddressLike];
  export type OutputTuple = [module: string];
  export interface OutputObject {
    module: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface ModuleManager extends BaseContract {
  connect(runner?: ContractRunner | null): ModuleManager;
  waitForDeployment(): Promise<this>;

  interface: ModuleManagerInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  addModule: TypedContractMethod<
    [moduleAndData: BytesLike],
    [void],
    "nonpayable"
  >;

  entrypoint: TypedContractMethod<[], [string], "view">;

  executeFromModule: TypedContractMethod<
    [to: AddressLike, value: BigNumberish, data: BytesLike],
    [void],
    "nonpayable"
  >;

  isHook: TypedContractMethod<[addr: AddressLike], [boolean], "view">;

  isModule: TypedContractMethod<[addr: AddressLike], [boolean], "view">;

  listModules: TypedContractMethod<[], [string[]], "view">;

  removeModule: TypedContractMethod<
    [module: AddressLike],
    [void],
    "nonpayable"
  >;

  resetOwners: TypedContractMethod<[pubKey: BytesLike], [void], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "addModule"
  ): TypedContractMethod<[moduleAndData: BytesLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "entrypoint"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "executeFromModule"
  ): TypedContractMethod<
    [to: AddressLike, value: BigNumberish, data: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "isHook"
  ): TypedContractMethod<[addr: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "isModule"
  ): TypedContractMethod<[addr: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "listModules"
  ): TypedContractMethod<[], [string[]], "view">;
  getFunction(
    nameOrSignature: "removeModule"
  ): TypedContractMethod<[module: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "resetOwners"
  ): TypedContractMethod<[pubKey: BytesLike], [void], "nonpayable">;

  getEvent(
    key: "AddModule"
  ): TypedContractEvent<
    AddModuleEvent.InputTuple,
    AddModuleEvent.OutputTuple,
    AddModuleEvent.OutputObject
  >;
  getEvent(
    key: "RemoveModule"
  ): TypedContractEvent<
    RemoveModuleEvent.InputTuple,
    RemoveModuleEvent.OutputTuple,
    RemoveModuleEvent.OutputObject
  >;

  filters: {
    "AddModule(address)": TypedContractEvent<
      AddModuleEvent.InputTuple,
      AddModuleEvent.OutputTuple,
      AddModuleEvent.OutputObject
    >;
    AddModule: TypedContractEvent<
      AddModuleEvent.InputTuple,
      AddModuleEvent.OutputTuple,
      AddModuleEvent.OutputObject
    >;

    "RemoveModule(address)": TypedContractEvent<
      RemoveModuleEvent.InputTuple,
      RemoveModuleEvent.OutputTuple,
      RemoveModuleEvent.OutputObject
    >;
    RemoveModule: TypedContractEvent<
      RemoveModuleEvent.InputTuple,
      RemoveModuleEvent.OutputTuple,
      RemoveModuleEvent.OutputObject
    >;
  };
}