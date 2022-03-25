/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface BridgeInterface extends utils.Interface {
  contractName: "Bridge";
  functions: {
    "ADMIN()": FunctionFragment;
    "DEFAULT_ADMIN_ROLE()": FunctionFragment;
    "chains(uint256)": FunctionFragment;
    "excludeToken(address)": FunctionFragment;
    "getRoleAdmin(bytes32)": FunctionFragment;
    "grantRole(bytes32,address)": FunctionFragment;
    "hasRole(bytes32,address)": FunctionFragment;
    "includeToken(address,string)": FunctionFragment;
    "redeem(bytes32,uint256,uint8,bytes32,bytes32)": FunctionFragment;
    "renounceRole(bytes32,address)": FunctionFragment;
    "revokeRole(bytes32,address)": FunctionFragment;
    "setTokenAddress(address)": FunctionFragment;
    "setValidatorAddress(address)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "swap(address,uint256,uint256,uint256,string,uint256)": FunctionFragment;
    "tokenAddress()": FunctionFragment;
    "tokens(address)": FunctionFragment;
    "transactions(bytes32)": FunctionFragment;
    "updateChainById(uint256)": FunctionFragment;
    "validatorAddress()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "ADMIN", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "chains",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "excludeToken",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "includeToken",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "redeem",
    values: [BytesLike, BigNumberish, BigNumberish, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setTokenAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setValidatorAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "swap",
    values: [
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      string,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenAddress",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "tokens", values: [string]): string;
  encodeFunctionData(
    functionFragment: "transactions",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "updateChainById",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "validatorAddress",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "ADMIN", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "chains", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "excludeToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "includeToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "redeem", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setTokenAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setValidatorAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tokenAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tokens", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transactions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateChainById",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validatorAddress",
    data: BytesLike
  ): Result;

  events: {
    "RedeemInitialized(address,uint256,bytes32)": EventFragment;
    "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
    "RoleGranted(bytes32,address,address)": EventFragment;
    "RoleRevoked(bytes32,address,address)": EventFragment;
    "SwapInitialized(address,address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "RedeemInitialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SwapInitialized"): EventFragment;
}

export type RedeemInitializedEvent = TypedEvent<
  [string, BigNumber, string],
  { to: string; amount: BigNumber; msg: string }
>;

export type RedeemInitializedEventFilter =
  TypedEventFilter<RedeemInitializedEvent>;

export type RoleAdminChangedEvent = TypedEvent<
  [string, string, string],
  { role: string; previousAdminRole: string; newAdminRole: string }
>;

export type RoleAdminChangedEventFilter =
  TypedEventFilter<RoleAdminChangedEvent>;

export type RoleGrantedEvent = TypedEvent<
  [string, string, string],
  { role: string; account: string; sender: string }
>;

export type RoleGrantedEventFilter = TypedEventFilter<RoleGrantedEvent>;

export type RoleRevokedEvent = TypedEvent<
  [string, string, string],
  { role: string; account: string; sender: string }
>;

export type RoleRevokedEventFilter = TypedEventFilter<RoleRevokedEvent>;

export type SwapInitializedEvent = TypedEvent<
  [string, string, BigNumber, BigNumber],
  { from: string; to: string; amount: BigNumber; nonce: BigNumber }
>;

export type SwapInitializedEventFilter = TypedEventFilter<SwapInitializedEvent>;

export interface Bridge extends BaseContract {
  contractName: "Bridge";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BridgeInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    ADMIN(overrides?: CallOverrides): Promise<[string]>;

    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;

    chains(arg0: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;

    excludeToken(
      _contractAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    includeToken(
      _contractAddress: string,
      _symbol: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    redeem(
      _hash: BytesLike,
      _amount: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTokenAddress(
      _tokenAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setValidatorAddress(
      _validatorAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    swap(
      _recipient: string,
      _amount: BigNumberish,
      _chainFrom: BigNumberish,
      _chainTo: BigNumberish,
      _symbol: string,
      _nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    tokenAddress(overrides?: CallOverrides): Promise<[string]>;

    tokens(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [string, string, number] & {
        tokenAddress: string;
        symbol: string;
        status: number;
      }
    >;

    transactions(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    updateChainById(
      _chainId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    validatorAddress(overrides?: CallOverrides): Promise<[string]>;
  };

  ADMIN(overrides?: CallOverrides): Promise<string>;

  DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

  chains(arg0: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

  excludeToken(
    _contractAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

  grantRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  hasRole(
    role: BytesLike,
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  includeToken(
    _contractAddress: string,
    _symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  redeem(
    _hash: BytesLike,
    _amount: BigNumberish,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  revokeRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTokenAddress(
    _tokenAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setValidatorAddress(
    _validatorAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  swap(
    _recipient: string,
    _amount: BigNumberish,
    _chainFrom: BigNumberish,
    _chainTo: BigNumberish,
    _symbol: string,
    _nonce: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  tokenAddress(overrides?: CallOverrides): Promise<string>;

  tokens(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [string, string, number] & {
      tokenAddress: string;
      symbol: string;
      status: number;
    }
  >;

  transactions(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  updateChainById(
    _chainId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  validatorAddress(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    ADMIN(overrides?: CallOverrides): Promise<string>;

    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

    chains(arg0: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

    excludeToken(
      _contractAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    includeToken(
      _contractAddress: string,
      _symbol: string,
      overrides?: CallOverrides
    ): Promise<void>;

    redeem(
      _hash: BytesLike,
      _amount: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setTokenAddress(
      _tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setValidatorAddress(
      _validatorAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    swap(
      _recipient: string,
      _amount: BigNumberish,
      _chainFrom: BigNumberish,
      _chainTo: BigNumberish,
      _symbol: string,
      _nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    tokenAddress(overrides?: CallOverrides): Promise<string>;

    tokens(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [string, string, number] & {
        tokenAddress: string;
        symbol: string;
        status: number;
      }
    >;

    transactions(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;

    updateChainById(
      _chainId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    validatorAddress(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "RedeemInitialized(address,uint256,bytes32)"(
      to?: string | null,
      amount?: null,
      msg?: null
    ): RedeemInitializedEventFilter;
    RedeemInitialized(
      to?: string | null,
      amount?: null,
      msg?: null
    ): RedeemInitializedEventFilter;

    "RoleAdminChanged(bytes32,bytes32,bytes32)"(
      role?: BytesLike | null,
      previousAdminRole?: BytesLike | null,
      newAdminRole?: BytesLike | null
    ): RoleAdminChangedEventFilter;
    RoleAdminChanged(
      role?: BytesLike | null,
      previousAdminRole?: BytesLike | null,
      newAdminRole?: BytesLike | null
    ): RoleAdminChangedEventFilter;

    "RoleGranted(bytes32,address,address)"(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): RoleGrantedEventFilter;
    RoleGranted(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): RoleGrantedEventFilter;

    "RoleRevoked(bytes32,address,address)"(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): RoleRevokedEventFilter;
    RoleRevoked(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): RoleRevokedEventFilter;

    "SwapInitialized(address,address,uint256,uint256)"(
      from?: string | null,
      to?: string | null,
      amount?: null,
      nonce?: null
    ): SwapInitializedEventFilter;
    SwapInitialized(
      from?: string | null,
      to?: string | null,
      amount?: null,
      nonce?: null
    ): SwapInitializedEventFilter;
  };

  estimateGas: {
    ADMIN(overrides?: CallOverrides): Promise<BigNumber>;

    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    chains(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    excludeToken(
      _contractAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    includeToken(
      _contractAddress: string,
      _symbol: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    redeem(
      _hash: BytesLike,
      _amount: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTokenAddress(
      _tokenAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setValidatorAddress(
      _validatorAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    swap(
      _recipient: string,
      _amount: BigNumberish,
      _chainFrom: BigNumberish,
      _chainTo: BigNumberish,
      _symbol: string,
      _nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    tokenAddress(overrides?: CallOverrides): Promise<BigNumber>;

    tokens(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    transactions(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    updateChainById(
      _chainId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    validatorAddress(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    ADMIN(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    DEFAULT_ADMIN_ROLE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    chains(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    excludeToken(
      _contractAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    includeToken(
      _contractAddress: string,
      _symbol: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    redeem(
      _hash: BytesLike,
      _amount: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTokenAddress(
      _tokenAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setValidatorAddress(
      _validatorAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    swap(
      _recipient: string,
      _amount: BigNumberish,
      _chainFrom: BigNumberish,
      _chainTo: BigNumberish,
      _symbol: string,
      _nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    tokenAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokens(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transactions(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    updateChainById(
      _chainId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    validatorAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
