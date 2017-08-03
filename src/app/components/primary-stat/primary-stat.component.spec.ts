import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryStatComponent } from './primary-stat.component';

describe('PrimaryStatComponent', () => {
  let component: PrimaryStatComponent;
  let fixture: ComponentFixture<PrimaryStatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimaryStatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaryStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
