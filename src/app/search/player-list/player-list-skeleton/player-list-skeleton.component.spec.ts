import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerListSkeletonComponent } from './player-list-skeleton.component';

describe('PlayerListSkeletonComponent', () => {
  let component: PlayerListSkeletonComponent;
  let fixture: ComponentFixture<PlayerListSkeletonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerListSkeletonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerListSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
