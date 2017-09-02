import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroCardSkeletonComponent } from './hero-card-skeleton.component';

describe('HeroCardSkeletonComponent', () => {
  let component: HeroCardSkeletonComponent;
  let fixture: ComponentFixture<HeroCardSkeletonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroCardSkeletonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroCardSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
