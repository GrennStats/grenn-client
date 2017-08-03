import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {PlayerHeroDetailComponent} from "./player-hero-detail.component";

describe("PlayerHeroDetailComponent", () => {
  let component: PlayerHeroDetailComponent;
  let fixture: ComponentFixture<PlayerHeroDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerHeroDetailComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerHeroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should be created", () => {
    expect(component).toBeTruthy();
  });
});
