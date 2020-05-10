import { Common } from "../common";
export declare class GrpcException extends Error {
    private rpcException;
    constructor(code: Common.GrpcStatus, message: string);
    getError(): object;
}
