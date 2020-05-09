"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@nestjs/common");
var grpc_exception_1 = require("../grpc.exception");
var rxjs_1 = require("rxjs");
var GrpcExceptionFilter = /** @class */ (function () {
    function GrpcExceptionFilter() {
    }
    GrpcExceptionFilter.prototype.catch = function (exception, host) {
        return rxjs_1.throwError(exception.getError());
    };
    GrpcExceptionFilter = __decorate([
        common_1.Catch(grpc_exception_1.GrpcException)
    ], GrpcExceptionFilter);
    return GrpcExceptionFilter;
}());
exports.GrpcExceptionFilter = GrpcExceptionFilter;
//# sourceMappingURL=grpc.exception.filter.js.map