import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {PlayerHeroListComponent} from "./player-hero-list.component";

describe("PlayerHeroListComponent", () => {
  let component: PlayerHeroListComponent;
  let fixture: ComponentFixture<PlayerHeroListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerHeroListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerHeroListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should be created", () => {
    expect(component).toBeTruthy();
  });
});
