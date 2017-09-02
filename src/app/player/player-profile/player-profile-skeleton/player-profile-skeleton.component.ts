import {Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy} from "@angular/core";

@Component({
  selector: "player-profile-skeleton",
  templateUrl: "./player-profile-skeleton.component.html",
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerProfileSkeletonComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
