"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@nestjs/common");
var mongoose_1 = require("mongoose");
var microservices_1 = require("@nestjs/microservices");
var common_2 = require("../../common");
var rxjs_1 = require("rxjs");
var ValidationError = mongoose_1.Error.ValidationError;
var ValidationErrorFilter = /** @class */ (function () {
    function ValidationErrorFilter() {
    }
    ValidationErrorFilter.prototype.catch = function (exception) {
        return rxjs_1.throwError(new microservices_1.RpcException({
            code: common_2.Common.GrpcStatus.INVALID_ARGUMENT,
            message: exception.errors[Object.keys(exception.errors)[0]].message
        }));
    };
    ValidationErrorFilter = __decorate([
        common_1.Catch(ValidationError)
    ], ValidationErrorFilter);
    return ValidationErrorFilter;
}());
exports.ValidationErrorFilter = ValidationErrorFilter;
//# sourceMappingURL=validation.error.filter.js.map