import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerHeroDetailSkeletonComponent } from './player-hero-detail-skeleton.component';

describe('PlayerHeroDetailSkeletonComponent', () => {
  let component: PlayerHeroDetailSkeletonComponent;
  let fixture: ComponentFixture<PlayerHeroDetailSkeletonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerHeroDetailSkeletonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerHeroDetailSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
