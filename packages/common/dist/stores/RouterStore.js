"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Router Store is a React Context object that holds state variables
// managed by mobx as "observeables".
//
// "screen" property used by <Router /> to determine which page to render
// (e.g. either <CurrentWorkout /> or <Workout History />
//
// this context can be injected into any react component via
// useContext hook, like:
// const routerStore = useContext(RouterStoreContext)
var mobx_1 = require("mobx");
var react_1 = require("react");
var RouterStore = /** @class */ (function () {
    function RouterStore() {
        this.screen = "CurrentWorkout";
    }
    __decorate([
        mobx_1.observable
    ], RouterStore.prototype, "screen", void 0);
    return RouterStore;
}());
exports.RouterStoreContext = react_1.createContext(new RouterStore());
