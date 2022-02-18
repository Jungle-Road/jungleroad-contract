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
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface FactoryERC1155Interface extends utils.Interface {
  functions: {
    "balanceOf(address,uint256)": FunctionFragment;
    "canMint(uint256,uint256)": FunctionFragment;
    "factorySchemaName()": FunctionFragment;
    "mint(uint256,address,uint256,bytes)": FunctionFragment;
    "name()": FunctionFragment;
    "numOptions()": FunctionFragment;
    "supportsFactoryInterface()": FunctionFragment;
    "symbol()": FunctionFragment;
    "uri(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "canMint",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "factorySchemaName",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "mint",
    values: [BigNumberish, string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "numOptions",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "supportsFactoryInterface",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(functionFragment: "uri", values: [BigNumberish]): string;

  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "canMint", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "factorySchemaName",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "numOptions", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsFactoryInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "uri", data: BytesLike): Result;

  events: {};
}

export interface FactoryERC1155 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: FactoryERC1155Interface;

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
    balanceOf(
      _owner: string,
      _optionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    canMint(
      _optionId: BigNumberish,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    factorySchemaName(overrides?: CallOverrides): Promise<[string]>;

    mint(
      _optionId: BigNumberish,
      _toAddress: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    name(overrides?: CallOverrides): Promise<[string]>;

    numOptions(overrides?: CallOverrides): Promise<[BigNumber]>;

    supportsFactoryInterface(overrides?: CallOverrides): Promise<[boolean]>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    uri(_optionId: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
  };

  balanceOf(
    _owner: string,
    _optionId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  canMint(
    _optionId: BigNumberish,
    _amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  factorySchemaName(overrides?: CallOverrides): Promise<string>;

  mint(
    _optionId: BigNumberish,
    _toAddress: string,
    _amount: BigNumberish,
    _data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  name(overrides?: CallOverrides): Promise<string>;

  numOptions(overrides?: CallOverrides): Promise<BigNumber>;

  supportsFactoryInterface(overrides?: CallOverrides): Promise<boolean>;

  symbol(overrides?: CallOverrides): Promise<string>;

  uri(_optionId: BigNumberish, overrides?: CallOverrides): Promise<string>;

  callStatic: {
    balanceOf(
      _owner: string,
      _optionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    canMint(
      _optionId: BigNumberish,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    factorySchemaName(overrides?: CallOverrides): Promise<string>;

    mint(
      _optionId: BigNumberish,
      _toAddress: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    name(overrides?: CallOverrides): Promise<string>;

    numOptions(overrides?: CallOverrides): Promise<BigNumber>;

    supportsFactoryInterface(overrides?: CallOverrides): Promise<boolean>;

    symbol(overrides?: CallOverrides): Promise<string>;

    uri(_optionId: BigNumberish, overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    balanceOf(
      _owner: string,
      _optionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    canMint(
      _optionId: BigNumberish,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    factorySchemaName(overrides?: CallOverrides): Promise<BigNumber>;

    mint(
      _optionId: BigNumberish,
      _toAddress: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    numOptions(overrides?: CallOverrides): Promise<BigNumber>;

    supportsFactoryInterface(overrides?: CallOverrides): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    uri(_optionId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    balanceOf(
      _owner: string,
      _optionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    canMint(
      _optionId: BigNumberish,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    factorySchemaName(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mint(
      _optionId: BigNumberish,
      _toAddress: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    numOptions(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    supportsFactoryInterface(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    uri(
      _optionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
