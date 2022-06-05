import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunfactorComponent } from './funfactor.component';

describe('FunfactorComponent', () => {
  let component: FunfactorComponent;
  let fixture: ComponentFixture<FunfactorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunfactorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunfactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
