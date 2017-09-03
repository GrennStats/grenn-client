import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerSkeletonComponent } from './player-skeleton.component';

describe('PlayerSkeletonComponent', () => {
  let component: PlayerSkeletonComponent;
  let fixture: ComponentFixture<PlayerSkeletonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerSkeletonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
