"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var microservices_1 = require("@nestjs/microservices");
var GrpcException = /** @class */ (function (_super) {
    __extends(GrpcException, _super);
    function GrpcException(code, message) {
        return _super.call(this, { code: code, message: message }) || this;
    }
    return GrpcException;
}(microservices_1.RpcException));
exports.GrpcException = GrpcException;
//# sourceMappingURL=grpc.exception.js.map