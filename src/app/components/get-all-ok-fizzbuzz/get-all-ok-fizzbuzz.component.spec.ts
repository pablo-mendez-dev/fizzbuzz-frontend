import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllOkFizzbuzzComponent } from './get-all-ok-fizzbuzz.component';

describe('GetAllOkFizzbuzzComponent', () => {
  let component: GetAllOkFizzbuzzComponent;
  let fixture: ComponentFixture<GetAllOkFizzbuzzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllOkFizzbuzzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllOkFizzbuzzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
