import {ArgumentsHost, Catch, RpcExceptionFilter} from "@nestjs/common";
import {GrpcException} from "../grpc.exception";
import {Observable, throwError} from "rxjs";

@Catch(GrpcException)
export class GrpcExceptionFilter implements RpcExceptionFilter<GrpcException> {

  catch(exception: GrpcException, host: ArgumentsHost): Observable<any> {
    return throwError(exception.getError());
  }

}
