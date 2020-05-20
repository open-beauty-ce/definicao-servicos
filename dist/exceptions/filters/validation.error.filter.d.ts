import { RpcExceptionFilter } from "@nestjs/common";
import { Error } from "mongoose";
import { Observable } from "rxjs";
import ValidationError = Error.ValidationError;
export declare class ValidationErrorFilter implements RpcExceptionFilter {
    catch(exception: ValidationError): Observable<any>;
}
