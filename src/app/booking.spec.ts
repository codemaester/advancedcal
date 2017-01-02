/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Booking } from './booking';

describe('Schedules test', () => {
  let booking: Booking;

  beforeEach(() => {
    booking = new Booking();
  });

  it('should create', () => {
    expect(booking).toBeThere();
  });
});
