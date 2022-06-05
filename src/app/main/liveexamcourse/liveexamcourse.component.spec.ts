import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveexamcourseComponent } from './liveexamcourse.component';

describe('LiveexamcourseComponent', () => {
  let component: LiveexamcourseComponent;
  let fixture: ComponentFixture<LiveexamcourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveexamcourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveexamcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
