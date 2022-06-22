import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestNumberInputComponent } from './guest-number-input.component';

describe('GuestNumberInputComponent', () => {
  let component: GuestNumberInputComponent;
  let fixture: ComponentFixture<GuestNumberInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestNumberInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestNumberInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
