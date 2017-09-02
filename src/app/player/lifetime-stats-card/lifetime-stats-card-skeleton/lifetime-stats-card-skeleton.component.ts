import {Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy} from "@angular/core";

@Component({
  selector: "lifetime-stats-card-skeleton",
  templateUrl: "./lifetime-stats-card-skeleton.component.html",
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LifetimeStatsCardSkeletonComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
