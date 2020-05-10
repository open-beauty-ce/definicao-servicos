import {RpcException} from "@nestjs/microservices";
import {Common} from "../common";

export class GrpcException extends Error {

  private rpcException: RpcException;

  constructor(code: Common.GrpcStatus, message: string) {
    super(message);
    this.rpcException = new RpcException({code, message});
  }

  getError(): object {
    return this.rpcException.getError() as object;
  }
}
