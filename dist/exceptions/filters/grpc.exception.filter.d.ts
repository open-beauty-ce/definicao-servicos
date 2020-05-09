import { ArgumentsHost, RpcExceptionFilter } from "@nestjs/common";
import { GrpcException } from "../grpc.exception";
import { Observable } from "rxjs";
export declare class GrpcExceptionFilter implements RpcExceptionFilter<GrpcException> {
    catch(exception: GrpcException, host: ArgumentsHost): Observable<any>;
}
