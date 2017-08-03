import {Component, OnInit, ChangeDetectionStrategy} from "@angular/core";

@Component({
  selector: "app-player-hero-list",
  templateUrl: "./player-hero-list.component.html",
  styleUrls: ["./player-hero-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerHeroListComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
