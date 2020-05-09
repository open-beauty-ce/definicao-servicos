import {RpcException} from "@nestjs/microservices";
import {Common} from "../common";

export class GrpcException extends RpcException {
  constructor(code: Common.GrpcStatus, message: string) {
    super({ code, message });
  }
}
