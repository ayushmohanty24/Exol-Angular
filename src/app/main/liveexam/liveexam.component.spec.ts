import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveexamComponent } from './liveexam.component';

describe('LiveexamComponent', () => {
  let component: LiveexamComponent;
  let fixture: ComponentFixture<LiveexamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveexamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveexamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
