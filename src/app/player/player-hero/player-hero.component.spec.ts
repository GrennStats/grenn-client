import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {PlayerHeroComponent} from "./player-hero.component";

describe("PlayerHeroComponent", () => {
  let component: PlayerHeroComponent;
  let fixture: ComponentFixture<PlayerHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerHeroComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should be created", () => {
    expect(component).toBeTruthy();
  });
});
