import {Component, OnInit, ChangeDetectionStrategy} from "@angular/core";

@Component({
  selector: "app-player-hero",
  templateUrl: "./player-hero.component.html",
  styleUrls: ["./player-hero.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerHeroComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
