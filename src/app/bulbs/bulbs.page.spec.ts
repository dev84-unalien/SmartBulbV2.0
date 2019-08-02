import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulbsPage } from './bulbs.page';

describe('BulbsPage', () => {
  let component: BulbsPage;
  let fixture: ComponentFixture<BulbsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulbsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulbsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
