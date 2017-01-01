/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Schedules } from './schedules';

describe('Schedules test', () => {
  let schedules: Schedules;

  beforeEach(() => {
    schedules = new Schedules();
  });

  it('should create', () => {
    expect(schedules.getFree()).toBe(1);
  });
});
