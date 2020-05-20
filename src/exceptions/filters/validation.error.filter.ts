import {Catch, RpcExceptionFilter} from "@nestjs/common";
import {Error} from "mongoose";
import {RpcException} from "@nestjs/microservices";
import {Common} from "../../common";
import {Observable, throwError} from "rxjs";
import ValidationError = Error.ValidationError;

@Catch(ValidationError)
export class ValidationErrorFilter implements RpcExceptionFilter {

  catch(exception: ValidationError): Observable<any> {
    return throwError(new RpcException({
      code: Common.GrpcStatus.INVALID_ARGUMENT,
      message: exception.errors[Object.keys(exception.errors)[0]].message
    }));
  }

}
