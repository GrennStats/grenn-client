import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerEntrySkeletonComponent } from './player-entry-skeleton.component';

describe('PlayerEntrySkeletonComponent', () => {
  let component: PlayerEntrySkeletonComponent;
  let fixture: ComponentFixture<PlayerEntrySkeletonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerEntrySkeletonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerEntrySkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
