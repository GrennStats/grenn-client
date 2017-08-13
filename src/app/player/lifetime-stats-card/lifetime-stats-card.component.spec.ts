import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifetimeStatsCardComponent } from './lifetime-stats-card.component';

describe('LifetimeStatsCardComponent', () => {
  let component: LifetimeStatsCardComponent;
  let fixture: ComponentFixture<LifetimeStatsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifetimeStatsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifetimeStatsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
