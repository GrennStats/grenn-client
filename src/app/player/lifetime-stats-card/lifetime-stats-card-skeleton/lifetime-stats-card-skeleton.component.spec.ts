import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifetimeStatsCardSkeletonComponent } from './lifetime-stats-card-skeleton.component';

describe('LifetimeStatsCardSkeletonComponent', () => {
  let component: LifetimeStatsCardSkeletonComponent;
  let fixture: ComponentFixture<LifetimeStatsCardSkeletonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifetimeStatsCardSkeletonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifetimeStatsCardSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
