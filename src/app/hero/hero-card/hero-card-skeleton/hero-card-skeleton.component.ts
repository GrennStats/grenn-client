import {Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy} from "@angular/core";

@Component({
  selector: "hero-card-skeleton",
  templateUrl: "./hero-card-skeleton.component.html",
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroCardSkeletonComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
