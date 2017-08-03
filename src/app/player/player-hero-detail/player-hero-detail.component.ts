import {Component, OnInit, ChangeDetectionStrategy} from "@angular/core";

@Component({
  selector: "app-player-hero-detail",
  templateUrl: "./player-hero-detail.component.html",
  styleUrls: ["./player-hero-detail.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerHeroDetailComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
