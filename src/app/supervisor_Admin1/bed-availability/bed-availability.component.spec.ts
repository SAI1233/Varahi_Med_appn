import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BedAvailabilityComponent } from './bed-availability.component';

describe('BedAvailabilityComponent', () => {
  let component: BedAvailabilityComponent;
  let fixture: ComponentFixture<BedAvailabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BedAvailabilityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BedAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
