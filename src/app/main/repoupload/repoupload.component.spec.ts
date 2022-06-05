import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepouploadComponent } from './repoupload.component';

describe('RepouploadComponent', () => {
  let component: RepouploadComponent;
  let fixture: ComponentFixture<RepouploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepouploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepouploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
