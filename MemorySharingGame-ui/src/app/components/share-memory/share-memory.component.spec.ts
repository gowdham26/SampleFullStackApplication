import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareMemoryComponent } from './share-memory.component';

describe('ShareMemoryComponent', () => {
  let component: ShareMemoryComponent;
  let fixture: ComponentFixture<ShareMemoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareMemoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareMemoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
