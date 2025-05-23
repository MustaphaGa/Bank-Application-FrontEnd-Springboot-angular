import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmRegisterComponent } from './confirm-register.component';

describe('ConfirmRegisterComponent', () => {
  let component: ConfirmRegisterComponent;
  let fixture: ComponentFixture<ConfirmRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmRegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
