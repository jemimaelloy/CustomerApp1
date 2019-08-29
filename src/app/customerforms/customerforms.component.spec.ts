import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerformsComponent } from './customerforms.component';

describe('CustomerformsComponent', () => {
  let component: CustomerformsComponent;
  let fixture: ComponentFixture<CustomerformsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerformsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
