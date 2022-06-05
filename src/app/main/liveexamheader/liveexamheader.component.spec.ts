import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveexamheaderComponent } from './liveexamheader.component';

describe('LiveexamheaderComponent', () => {
  let component: LiveexamheaderComponent;
  let fixture: ComponentFixture<LiveexamheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveexamheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveexamheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
