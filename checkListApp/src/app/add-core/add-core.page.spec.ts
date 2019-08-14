import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCorePage } from './add-core.page';

describe('AddCorePage', () => {
  let component: AddCorePage;
  let fixture: ComponentFixture<AddCorePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCorePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
