/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";

export interface PauserRoleInterface extends utils.Interface {
  functions: {
    "isPauser(address)": FunctionFragment;
    "renouncePauser()": FunctionFragment;
    "addPauser(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "isPauser" | "renouncePauser" | "addPauser"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "isPauser",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "renouncePauser",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addPauser",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "isPauser", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renouncePauser",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addPauser", data: BytesLike): Result;

  events: {
    "PauserAdded(address)": EventFragment;
    "PauserRemoved(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "PauserAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PauserRemoved"): EventFragment;
}

export interface PauserAddedEventObject {
  account: string;
}
export type PauserAddedEvent = TypedEvent<[string], PauserAddedEventObject>;

export type PauserAddedEventFilter = TypedEventFilter<PauserAddedEvent>;

export interface PauserRemovedEventObject {
  account: string;
}
export type PauserRemovedEvent = TypedEvent<[string], PauserRemovedEventObject>;

export type PauserRemovedEventFilter = TypedEventFilter<PauserRemovedEvent>;

export interface PauserRole extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PauserRoleInterface;

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
    isPauser(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    renouncePauser(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addPauser(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  isPauser(
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  renouncePauser(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addPauser(
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    isPauser(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    renouncePauser(overrides?: CallOverrides): Promise<void>;

    addPauser(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "PauserAdded(address)"(
      account?: PromiseOrValue<string> | null
    ): PauserAddedEventFilter;
    PauserAdded(
      account?: PromiseOrValue<string> | null
    ): PauserAddedEventFilter;

    "PauserRemoved(address)"(
      account?: PromiseOrValue<string> | null
    ): PauserRemovedEventFilter;
    PauserRemoved(
      account?: PromiseOrValue<string> | null
    ): PauserRemovedEventFilter;
  };

  estimateGas: {
    isPauser(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renouncePauser(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addPauser(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    isPauser(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renouncePauser(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addPauser(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
