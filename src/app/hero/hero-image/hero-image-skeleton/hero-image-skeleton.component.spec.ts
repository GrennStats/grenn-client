import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroImageSkeletonComponent } from './hero-image-skeleton.component';

describe('HeroImageSkeletonComponent', () => {
  let component: HeroImageSkeletonComponent;
  let fixture: ComponentFixture<HeroImageSkeletonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroImageSkeletonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroImageSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
