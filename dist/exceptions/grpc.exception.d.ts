import { RpcException } from "@nestjs/microservices";
import { Common } from "../common";
export declare class GrpcException extends RpcException {
    constructor(code: Common.GrpcStatus, message: string);
}
