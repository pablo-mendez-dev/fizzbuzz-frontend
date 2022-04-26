import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetFizzbuzzComponent } from './get-fizzbuzz.component';

describe('GetFizzbuzzComponent', () => {
  let component: GetFizzbuzzComponent;
  let fixture: ComponentFixture<GetFizzbuzzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetFizzbuzzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetFizzbuzzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
