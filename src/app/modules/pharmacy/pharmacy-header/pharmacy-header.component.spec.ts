import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyHeaderComponent } from './pharmacy-header.component';

describe('PharmacyHeaderComponent', () => {
  let component: PharmacyHeaderComponent;
  let fixture: ComponentFixture<PharmacyHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacyHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacyHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
