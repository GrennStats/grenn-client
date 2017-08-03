import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerEntryComponent } from './player-entry.component';

describe('PlayerEntryComponent', () => {
  let component: PlayerEntryComponent;
  let fixture: ComponentFixture<PlayerEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
