import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeAdresssComponent } from './office-adresss.component';

describe('OfficeAdresssComponent', () => {
  let component: OfficeAdresssComponent;
  let fixture: ComponentFixture<OfficeAdresssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfficeAdresssComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficeAdresssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
