import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetmemoryandguesspersonComponent } from './getmemoryandguessperson.component';

describe('GetmemoryandguesspersonComponent', () => {
  let component: GetmemoryandguesspersonComponent;
  let fixture: ComponentFixture<GetmemoryandguesspersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetmemoryandguesspersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetmemoryandguesspersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
