import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerenquiryComponent } from './bannerenquiry.component';

describe('BannerenquiryComponent', () => {
  let component: BannerenquiryComponent;
  let fixture: ComponentFixture<BannerenquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerenquiryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerenquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
