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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ErrorBoundary = /** @class */ (function (_super) {
    __extends(ErrorBoundary, _super);
    function ErrorBoundary() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            error: null
        };
        return _this;
    }
    ErrorBoundary.getDerivedStateFromError = function (error) {
        return { error: error };
    };
    ErrorBoundary.prototype.componentDidMount = function () {
        window.onerror = this.logError;
    };
    ErrorBoundary.prototype.componentDidCatch = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.logError(args);
    };
    ErrorBoundary.prototype.logError = function (args) {
        try {
            fetch("/error", {
                method: "post",
                body: JSON.stringify(args)
            });
        }
        catch (e) {
            /* fuck it */
        }
    };
    ErrorBoundary.prototype.render = function () {
        if (this.state.error) {
            return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("h2", null, "An error occurred!"),
                react_1.default.createElement("p", null,
                    "Here is all the info we have, dude:",
                    react_1.default.createElement("pre", null, this.state.error))));
        }
        return this.props.children;
    };
    return ErrorBoundary;
}(react_1.default.Component));
exports.ErrorBoundary = ErrorBoundary;
