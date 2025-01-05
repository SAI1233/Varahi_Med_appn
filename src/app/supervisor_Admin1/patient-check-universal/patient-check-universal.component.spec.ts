import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientCheckUniversalComponent } from './patient-check-universal.component';

describe('PatientCheckUniversalComponent', () => {
  let component: PatientCheckUniversalComponent;
  let fixture: ComponentFixture<PatientCheckUniversalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientCheckUniversalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientCheckUniversalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
