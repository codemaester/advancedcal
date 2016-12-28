var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
var GlobalState = (function () {
    function GlobalState() {
        this.autoApply = true;
        this.firstWeekdaySunday = false;
        this.format = "DD.MM.YYYY";
        this.signedIn = false;
        this.userName = "";
        this.imageUrl = "";
    }
    return GlobalState;
}());
GlobalState = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], GlobalState);
export { GlobalState };
//# sourceMappingURL=../../../../src/app/global-state.js.map