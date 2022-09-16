/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "alice.checkers.checkers";

export interface NextGame {
  idValue: number;
  /** Will contain the index of the game at the head. */
  fifoHeadIndex: string;
  /** Will contain the index of the game at the tail. */
  fifoTailIndex: string;
}

const baseNextGame: object = {
  idValue: 0,
  fifoHeadIndex: "",
  fifoTailIndex: "",
};

export const NextGame = {
  encode(message: NextGame, writer: Writer = Writer.create()): Writer {
    if (message.idValue !== 0) {
      writer.uint32(8).uint64(message.idValue);
    }
    if (message.fifoHeadIndex !== "") {
      writer.uint32(18).string(message.fifoHeadIndex);
    }
    if (message.fifoTailIndex !== "") {
      writer.uint32(26).string(message.fifoTailIndex);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): NextGame {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseNextGame } as NextGame;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.idValue = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.fifoHeadIndex = reader.string();
          break;
        case 3:
          message.fifoTailIndex = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NextGame {
    const message = { ...baseNextGame } as NextGame;
    if (object.idValue !== undefined && object.idValue !== null) {
      message.idValue = Number(object.idValue);
    } else {
      message.idValue = 0;
    }
    if (object.fifoHeadIndex !== undefined && object.fifoHeadIndex !== null) {
      message.fifoHeadIndex = String(object.fifoHeadIndex);
    } else {
      message.fifoHeadIndex = "";
    }
    if (object.fifoTailIndex !== undefined && object.fifoTailIndex !== null) {
      message.fifoTailIndex = String(object.fifoTailIndex);
    } else {
      message.fifoTailIndex = "";
    }
    return message;
  },

  toJSON(message: NextGame): unknown {
    const obj: any = {};
    message.idValue !== undefined && (obj.idValue = message.idValue);
    message.fifoHeadIndex !== undefined &&
      (obj.fifoHeadIndex = message.fifoHeadIndex);
    message.fifoTailIndex !== undefined &&
      (obj.fifoTailIndex = message.fifoTailIndex);
    return obj;
  },

  fromPartial(object: DeepPartial<NextGame>): NextGame {
    const message = { ...baseNextGame } as NextGame;
    if (object.idValue !== undefined && object.idValue !== null) {
      message.idValue = object.idValue;
    } else {
      message.idValue = 0;
    }
    if (object.fifoHeadIndex !== undefined && object.fifoHeadIndex !== null) {
      message.fifoHeadIndex = object.fifoHeadIndex;
    } else {
      message.fifoHeadIndex = "";
    }
    if (object.fifoTailIndex !== undefined && object.fifoTailIndex !== null) {
      message.fifoTailIndex = object.fifoTailIndex;
    } else {
      message.fifoTailIndex = "";
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
