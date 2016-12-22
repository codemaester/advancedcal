var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Booking } from './booking';
import { GlobalState } from './global-state';
import { CalendarService } from './calendar.service';
import { REQUIRED, OPTIONAL, IMPORTANT } from './attendance-level';
var SchedulerComponent = (function () {
    function SchedulerComponent(booking, state, router, calendarService, zone) {
        var _this = this;
        this.booking = booking;
        this.state = state;
        this.router = router;
        this.calendarService = calendarService;
        this.zone = zone;
        this.levels = [REQUIRED, IMPORTANT, OPTIONAL];
        this.participant = { email: "", name: "", attendanceLevel: REQUIRED };
        this.typeaheadLoading = false;
        this.typeaheadNoResults = false;
        this.dataSource = Observable.create(function (observer) {
            _this.calendarService.findUsers(_this.participant.email)
                .then(function (response) {
                if (!response.result) {
                    observer.complete();
                    return;
                }
                var users_result = [];
                for (var _i = 0, _a = response.result.users; _i < _a.length; _i++) {
                    var user = _a[_i];
                    users_result.push({
                        'name': user.name.fullName,
                        'email': user.primaryEmail
                    });
                }
                zone.run(function () { return observer.next(users_result); });
                observer.complete();
            });
        });
    }
    SchedulerComponent.prototype.ngOnInit = function () {
        if (!this.state.signedIn) {
            this.router.navigate(['/about']);
        }
    };
    SchedulerComponent.prototype.onAdd = function () {
        this.booking.participants.push(this.participant);
        this.participant = { email: "", name: "", attendanceLevel: REQUIRED };
    };
    SchedulerComponent.prototype.onRemove = function (i) {
        this.booking.participants.splice(i, 1);
    };
    SchedulerComponent.prototype.onSearch = function () {
    };
    SchedulerComponent.prototype.changeTypeaheadLoading = function (loading) {
        this.typeaheadLoading = loading;
    };
    SchedulerComponent.prototype.changeTypeaheadNoResults = function (noResult) {
        this.typeaheadNoResults = noResult;
    };
    SchedulerComponent.prototype.typeaheadOnSelect = function (e) {
        this.participant.email = e.item.email;
        this.participant.name = e.item.name;
        this.onAdd();
    };
    return SchedulerComponent;
}());
SchedulerComponent = __decorate([
    Component({
        selector: 'scheduler',
        templateUrl: 'app/scheduler.component.html'
    }),
    __metadata("design:paramtypes", [Booking, GlobalState,
        Router, CalendarService,
        NgZone])
], SchedulerComponent);
export { SchedulerComponent };
//# sourceMappingURL=../../../src/app/scheduler.component.js.map