import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseTransferComponent } from './case-transfer.component';

describe('CaseTransferComponent', () => {
  let component: CaseTransferComponent;
  let fixture: ComponentFixture<CaseTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaseTransferComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
