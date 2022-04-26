import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllErrorFizzbuzzComponent } from './get-all-error-fizzbuzz.component';

describe('GetAllErrorFizzbuzzComponent', () => {
  let component: GetAllErrorFizzbuzzComponent;
  let fixture: ComponentFixture<GetAllErrorFizzbuzzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllErrorFizzbuzzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllErrorFizzbuzzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
