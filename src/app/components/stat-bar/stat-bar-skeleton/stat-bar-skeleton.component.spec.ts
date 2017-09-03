import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatBarSkeletonComponent } from './stat-bar-skeleton.component';

describe('StatBarSkeletonComponent', () => {
  let component: StatBarSkeletonComponent;
  let fixture: ComponentFixture<StatBarSkeletonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatBarSkeletonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatBarSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
