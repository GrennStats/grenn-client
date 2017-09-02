import {Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy} from "@angular/core";

@Component({
  selector: "hero-stats-skeleton",
  templateUrl: "./hero-stats-skeleton.component.html",
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroStatsSkeletonComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
