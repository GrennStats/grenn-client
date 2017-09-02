import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatCardSkeletonComponent } from './stat-card-skeleton.component';

describe('StatCardSkeletonComponent', () => {
  let component: StatCardSkeletonComponent;
  let fixture: ComponentFixture<StatCardSkeletonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatCardSkeletonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatCardSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
