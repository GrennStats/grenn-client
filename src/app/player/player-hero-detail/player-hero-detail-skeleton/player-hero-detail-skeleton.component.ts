import {Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy} from "@angular/core";

@Component({
  selector: "player-hero-detail-skeleton",
  templateUrl: "./player-hero-detail-skeleton.component.html",
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerHeroDetailSkeletonComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
