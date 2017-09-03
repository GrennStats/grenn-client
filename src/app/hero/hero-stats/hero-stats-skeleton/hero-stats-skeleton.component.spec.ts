import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroStatsSkeletonComponent } from './hero-stats-skeleton.component';

describe('HeroStatsSkeletonComponent', () => {
  let component: HeroStatsSkeletonComponent;
  let fixture: ComponentFixture<HeroStatsSkeletonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroStatsSkeletonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroStatsSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
