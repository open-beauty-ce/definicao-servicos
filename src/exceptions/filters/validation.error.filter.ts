import {ArgumentsHost, Catch, ExceptionFilter} from "@nestjs/common";
import {Error} from "mongoose";
import {RpcException} from "@nestjs/microservices";
import {Common} from "../../common";
import ValidationError = Error.ValidationError;

@Catch(ValidationError)
export class ValidationErrorFilter implements ExceptionFilter<ValidationError> {

  catch(exception: ValidationError, host: ArgumentsHost): any {
    throw new RpcException({ code: Common.GrpcStatus.INVALID_ARGUMENT, message: exception.errors[0].message })
  }

}
