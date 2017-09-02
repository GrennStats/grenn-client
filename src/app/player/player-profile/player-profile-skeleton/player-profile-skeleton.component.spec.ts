import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerProfileSkeletonComponent } from './player-profile-skeleton.component';

describe('PlayerProfileSkeletonComponent', () => {
  let component: PlayerProfileSkeletonComponent;
  let fixture: ComponentFixture<PlayerProfileSkeletonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerProfileSkeletonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerProfileSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
