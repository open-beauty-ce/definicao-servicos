import { ArgumentsHost, ExceptionFilter } from "@nestjs/common";
import { Error } from "mongoose";
import ValidationError = Error.ValidationError;
export declare class ValidationErrorFilter implements ExceptionFilter<ValidationError> {
    catch(exception: ValidationError, host: ArgumentsHost): any;
}
